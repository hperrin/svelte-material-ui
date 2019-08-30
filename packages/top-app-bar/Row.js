import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function Row(...args) {
  internals.class = 'mdc-top-app-bar__row';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Row.prototype = ClassAdder;

export default Row;