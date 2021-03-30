import { MDCRipple, MDCRippleFoundation } from '@material/ripple';
import * as util from '@material/ripple/util';
import { applyPassive } from '@material/dom/events';
import { matches } from '@material/dom/ponyfill';
import { getContext } from 'svelte';

export default function Ripple(
  node,
  {
    ripple = false,
    unbounded = false,
    disabled = false,
    color = null,
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
  }
) {
  let instance;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  function handleProps() {
    if (ripple) {
      removeClass('mdc-ripple-surface');
    } else {
      addClass('mdc-ripple-surface');
    }
    switch (color) {
      case 'surface':
        removeClass('mdc-ripple-surface--primary');
        removeClass('mdc-ripple-surface--accent');
        break;
      case 'primary':
        addClass('mdc-ripple-surface--primary');
        removeClass('mdc-ripple-surface--accent');
        break;
      case 'secondary':
        removeClass('mdc-ripple-surface--primary');
        addClass('mdc-ripple-surface--accent');
        break;
      default:
        removeClass('mdc-ripple-surface--primary');
        removeClass('mdc-ripple-surface--accent');
        break;
    }

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
          node.removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) =>
          window.removeEventListener('resize', handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset,
        }),
        isSurfaceActive: () => matches(node, ':active'),
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerInteractionHandler: (evtType, handler) =>
          node.addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) =>
          window.addEventListener('resize', handler),
        removeClass,
        updateCssVariable: (varName, value) =>
          node.style.setProperty(varName, value),
      });
      instance.init();
    } else if (instance && !ripple) {
      instance.destroy();
      instance = null;
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
      if ('ripple' in props) {
        ripple = props.ripple;
      }
      if ('unbounded' in props) {
        unbounded = props.unbounded;
      }
      if ('disabled' in props) {
        disabled = props.disabled;
      }
      if ('color' in props) {
        color = props.color;
      }
      if ('addClass' in props) {
        addClass = props.addClass;
      }
      if ('removeClass' in props) {
        removeClass = props.removeClass;
      }
      handleProps();
    },

    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
        removeClass('mdc-ripple-surface');
        removeClass('mdc-ripple-surface--primary');
        removeClass('mdc-ripple-surface--accent');
      }

      if (removeLayoutListener) {
        removeLayoutListener();
      }
    },
  };
}
