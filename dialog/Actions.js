import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Footer from '../common/Footer.svelte';

function Actions(...args) {
  internals.smuiClass = 'mdc-dialog__actions';
  internals.component = Footer;
  return new ClassAdder(...args);
}

Actions.prototype = ClassAdder;

export default Actions;
