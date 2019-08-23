import {MDCRipple} from '@material/ripple';

export default function Ripple(node, [ripple, props = {unbounded: false, color: null}]) {
  let instance = null;

  function handleProps(ripple, props) {
    if (ripple && !instance) {
      instance = new MDCRipple(node);
      node.classList.add('mdc-ripple-surface');
    } else if (instance && !ripple) {
      instance.destroy();
      instance = null;
      node.classList.remove('mdc-ripple-surface');
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
        instance = null;
        node.classList.remove('mdc-ripple-surface');
      }
    }
  }
}