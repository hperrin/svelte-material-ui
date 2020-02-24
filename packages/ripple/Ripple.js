import {MDCRipple} from '@material/ripple';
import {getContext} from 'svelte';

export default function Ripple(node, props = {ripple: false, unbounded: false, color: null, classForward: () => {}}) {
  let instance = null;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let classList = [];

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
      const _createAdapter = MDCRipple.createAdapter;
      MDCRipple.createAdapter = function(...args) {
        const adapter = _createAdapter.apply(this, args);
        adapter.addClass = function(className) {
          return addClass(className);
        };
        adapter.removeClass = function(className) {
          return removeClass(className);
        };
        return adapter;
      };
      instance = new MDCRipple(node);
      MDCRipple.createAdapter = _createAdapter;
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
