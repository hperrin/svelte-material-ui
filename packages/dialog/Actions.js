import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Footer from '@svelte-material-ui/common/Footer.svelte';

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
