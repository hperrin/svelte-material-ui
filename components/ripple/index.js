import {MDCRipple} from '@material/ripple/index';

export default function Ripple(node, [ripple, unbounded]) {
  let instance = null;

  if (ripple) {
    instance = new MDCRipple(node);
    if (unbounded) {
      instance.unbounded = true;
    }
  }

  return {
    update([ripple, unbounded]) {
      if (ripple && !instance) {
        instance = new MDCRipple(node);
      } else if (instance && !ripple) {
        instance.destroy();
        instance = null;
      }
      if (ripple) {
        instance.unbounded = unbounded;
      }
    },

    destroy() {
      if (instance) {
        instance.destroy();
      }
    }
  }
}