import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Span from '../common/Span.svelte';

function Graphic(...args) {
  internals.smuiClass = 'mdc-list-item__graphic';
  internals.component = Span;
  return new ClassAdder(...args);
}

Graphic.prototype = ClassAdder;

export default Graphic;