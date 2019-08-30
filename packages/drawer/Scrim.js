import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function Scrim(...args) {
  internals.class = 'mdc-drawer-scrim';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Scrim.prototype = ClassAdder;

export default Scrim;