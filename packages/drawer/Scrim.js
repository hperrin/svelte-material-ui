import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Scrim(...args) {
  internals.class = 'mdc-drawer-scrim';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Scrim.prototype = ClassAdder;

export default Scrim;