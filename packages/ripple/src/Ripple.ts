import { MDCRippleFoundation, util } from '@material/ripple';
import { events, ponyfill } from '@material/dom';
import { getContext } from 'svelte';
import type { AddLayoutListener, RemoveLayoutListener } from '@smui/common';
import { SvelteEventManager } from '@smui/common/internal';
const { applyPassive } = events;
const { matches } = ponyfill;

export type RippleProps = {
  ripple?: boolean;
  surface?: boolean;
  unbounded?: boolean;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  /** Whether the ripple is active. Leave null to determine automatically. */
  active?: boolean;
  rippleElement?: HTMLElement;
  eventTarget?: HTMLElement;
  activeTarget?: HTMLElement;
  addClass?: (className: string) => void;
  removeClass?: (className: string) => void;
  addStyle?: (name: string, value: string) => void;
  initPromise?: Promise<void>;
};

export default function Ripple(
  node: HTMLElement,
  {
    ripple = true,
    surface = false,
    unbounded = false,
    disabled = false,
    color,
    active,
    rippleElement,
    eventTarget,
    activeTarget,
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
    addStyle = (name, value) => node.style.setProperty(name, value),
    initPromise = Promise.resolve(),
  }: RippleProps = {},
) {
  let instance: MDCRippleFoundation | undefined;
  let eventManager = new SvelteEventManager();
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
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
    } else {
      removeClass('mdc-ripple-surface');
      removeClass('smui-ripple-surface--primary');
      removeClass('smui-ripple-surface--secondary');
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
        computeBoundingRect: () =>
          (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target as Node),
        deregisterDocumentInteractionHandler: (evtType, handler) =>
          eventManager.off(document.documentElement, evtType, handler),
        deregisterInteractionHandler: (evtType, handler) =>
          eventManager.off(eventTarget || node, evtType, handler),
        deregisterResizeHandler: (handler) =>
          window.removeEventListener('resize', handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset ?? window.scrollX,
          y: window.pageYOffset ?? window.scrollY,
        }),
        isSurfaceActive: () =>
          active == null ? matches(activeTarget || node, ':active') : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => {
          const opts = applyPassive();
          eventManager.on(
            document.documentElement,
            evtType,
            handler,
            typeof opts === 'boolean' ? { capture: opts } : opts,
          );
        },
        registerInteractionHandler: (evtType, handler) => {
          const opts = applyPassive();
          eventManager.on(
            eventTarget || node,
            evtType,
            handler,
            typeof opts === 'boolean' ? { capture: opts } : opts,
          );
        },
        registerResizeHandler: (handler) =>
          eventManager.on(window, 'resize', handler),
        removeClass,
        updateCssVariable: addStyle,
      });

      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = undefined;
          eventManager.clear();
        }
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
    update(props: RippleProps) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
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
        color: undefined,
        active: undefined,
        rippleElement: undefined,
        eventTarget: undefined,
        activeTarget: undefined,
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
        instance = undefined;
        eventManager.clear();
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
