import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Actions(...args) {
  internals.smuiClass = 'mdc-snackbar__actions';
  internals.component = Div;
  return new ClassAdder(...args);
}

Actions.prototype = ClassAdder;

export default Actions;