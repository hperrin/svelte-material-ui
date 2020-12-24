import {MDCRipple, MDCRippleFoundation} from '@material/ripple';
import {getContext} from 'svelte';

export default function Ripple(node, props = {ripple: false, unbounded: false, disabled: false, color: null, classForward: () => {}}) {
  let instance = null;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let classList = [];
  let rippleCapableSurface = {
    get root_() {
      return node;
    },

    get unbounded() {
      return props.unbounded;
    },

    set unbounded(value) {
      return props.unbounded = value;
    },

    get disabled() {
      return props.disabled;
    },

    set disabled(value) {
      return props.disabled = value;
    }
  };

  function addClass(className) {
    const idx = classList.indexOf(className);
    if (idx === -1) {
      node.classList.add(className);
      classList.push(className);
      if (props.classForward) {
        props.classForward(classList);
      }
    }
  }

  function removeClass(className) {
    const idx = classList.indexOf(className);
    if (idx !== -1) {
      node.classList.remove(className);
      classList.splice(idx, 1);
      if (props.classForward) {
        props.classForward(classList);
      }
    }
  }

  function handleProps() {
    if (props.ripple && !instance) {
      // Override the Ripple component's adapter, so that we can forward classes
      // to Svelte components that overwrite Ripple's classes.
      const foundation = new MDCRippleFoundation({
        ...MDCRipple.createAdapter(rippleCapableSurface),
        addClass: (className) => addClass(className),
        removeClass: (className) => removeClass(className)
      });
      instance = new MDCRipple(node, foundation);
    } else if (instance && !props.ripple) {
      instance.destroy();
      instance = null;
    }
    if (props.ripple) {
      instance.unbounded = !!props.unbounded;
      switch (props.color) {
        case 'surface':
          addClass('mdc-ripple-surface');
          removeClass('mdc-ripple-surface--primary');
          removeClass('mdc-ripple-surface--accent');
          return;
        case 'primary':
          addClass('mdc-ripple-surface');
          addClass('mdc-ripple-surface--primary');
          removeClass('mdc-ripple-surface--accent');
          return;
        case 'secondary':
          addClass('mdc-ripple-surface');
          removeClass('mdc-ripple-surface--primary');
          addClass('mdc-ripple-surface--accent');
          return;
      }
    }
    removeClass('mdc-ripple-surface');
    removeClass('mdc-ripple-surface--primary');
    removeClass('mdc-ripple-surface--accent');
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
    update(newProps = {ripple: false, unbounded: false, color: null, classForward: []}) {
      props = newProps;
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
    }
  }
}
