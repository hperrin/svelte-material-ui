import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function Actions(...args) {
  internals.class = 'mdc-snackbar__actions';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Actions.prototype = ClassAdder;

export default Actions;