import { MDCRippleFoundation, util } from '@material/ripple';
import { events, ponyfill } from '@material/dom';
import { getContext } from 'svelte';
const { applyPassive } = events;
const { matches } = ponyfill;

export default function Ripple(
  node,
  {
    ripple = true,
    surface = false,
    unbounded = false,
    disabled = false,
    color = null,
    active = null,
    eventTarget = null,
    activeTarget = null,
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
    addStyle = (name, value) => node.style.setProperty(name, value),
    initPromise = Promise.resolve(),
  } = {}
) {
  let instance;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;

  function handleProps() {
    if (surface) {
      addClass('mdc-ripple-surface');
      if (color === 'primary') {
        addClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      } else if (color === 'secondary') {
        removeClass('smui-ripple-surface--primary');
        addClass('smui-ripple-surface--secondary');
      } else {
        removeClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      }
    }

    // Handle activation first.
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }

    // Then create/destroy an instance.
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        computeBoundingRect: () => node.getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterInteractionHandler: (evtType, handler) =>
          (eventTarget || node).removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterResizeHandler: (handler) =>
          window.removeEventListener('resize', handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset,
        }),
        isSurfaceActive: () =>
          active == null ? matches(activeTarget || node, ':active') : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerInteractionHandler: (evtType, handler) =>
          (eventTarget || node).addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerResizeHandler: (handler) =>
          window.addEventListener('resize', handler),
        removeClass,
        updateCssVariable: addStyle,
      });

      initPromise.then(() => {
        instance.init();
        instance.setUnbounded(unbounded);
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        instance.destroy();
        instance = null;
      });
    }

    // Now handle event/active targets
    if (
      instance &&
      (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)
    ) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;

      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }

    if (!ripple && unbounded) {
      addClass('mdc-ripple-upgraded--unbounded');
    }
  }

  handleProps();

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  function layout() {
    if (instance) {
      instance.layout();
    }
  }

  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise,
      } = {
        ripple: true,
        surface: false,
        unbounded: false,
        disabled: false,
        color: null,
        active: null,
        eventTarget: null,
        activeTarget: null,
        addClass: (className) => node.classList.add(className),
        removeClass: (className) => node.classList.remove(className),
        addStyle: (name, value) => node.style.setProperty(name, value),
        initPromise: Promise.resolve(),
        ...props,
      });
      handleProps();
    },

    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
        removeClass('mdc-ripple-surface');
        removeClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      }

      if (removeLayoutListener) {
        removeLayoutListener();
      }
    },
  };
}
