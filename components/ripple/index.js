import {MDCRipple} from '@material/ripple/index';

export default function Ripple(node, [ripple, props = {unbounded: false, color: null}]) {
  let instance = null;

  function handleProps(ripple, props) {
    if (ripple && !instance) {
      instance = new MDCRipple(node);
    } else if (instance && !ripple) {
      instance.destroy();
      instance = null;
    }
    if (ripple) {
      instance.unbounded = !!props.unbounded;
      if (props.color === 'primary') {
        node.classList.add('mdc-ripple-surface--primary');
        node.classList.remove('mdc-ripple-surface--accent');
        return;
      } else if (props.color === 'secondary') {
        node.classList.remove('mdc-ripple-surface--primary');
        node.classList.add('mdc-ripple-surface--accent');
        return;
      }
    }
    node.classList.remove('mdc-ripple-surface--primary');
    node.classList.remove('mdc-ripple-surface--accent');
  }

  if (ripple) {
    handleProps(ripple, props);
  }

  return {
    update([ripple, props = {unbounded: false, color: null}]) {
      handleProps(ripple, props);
    },

    destroy() {
      if (instance) {
        instance.destroy();
      }
    }
  }
}