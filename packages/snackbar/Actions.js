import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function Actions(...args) {
  internals.class = 'mdc-snackbar__actions';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Actions.prototype = ClassAdder;

export default Actions;