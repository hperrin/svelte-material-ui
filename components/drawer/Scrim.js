import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Scrim(...args) {
  internals.smuiClass = 'mdc-drawer-scrim';
  internals.component = Div;
  return new ClassAdder(...args);
}

Scrim.prototype = ClassAdder;

export default Scrim;