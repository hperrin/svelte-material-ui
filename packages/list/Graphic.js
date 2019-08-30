import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Span from '@smui/common/Span.svelte';

function Graphic(...args) {
  internals.class = 'mdc-list-item__graphic';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Graphic.prototype = ClassAdder;

export default Graphic;