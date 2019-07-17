import {MDCRipple} from '@material/ripple/index';

export default function Ripple(node, ripple) {
  let instance;

  if (ripple) {
    instance = new MDCRipple(node);
  }

  return {
    update(ripple) {
      if (ripple) {
        instance = new MDCRipple(node);
      } else {
        instance.deactivate();
      }
    },

    destroy() {
      instance.deactivate();
    }
  }
}