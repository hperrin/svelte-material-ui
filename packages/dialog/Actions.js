import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Footer from '@smui/common/Footer.svelte';

function Actions(...args) {
  internals.class = 'mdc-dialog__actions';
  internals.component = Footer;
  internals.contexts = {
    'SMUI:button:context': 'dialog:action'
  };
  return new ClassAdder(...args);
}

Actions.prototype = ClassAdder;

export default Actions;
