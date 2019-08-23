import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Span from '@svelte-material-ui/common/Span.svelte';

function Graphic(...args) {
  internals.class = 'mdc-list-item__graphic';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Graphic.prototype = ClassAdder;

export default Graphic;