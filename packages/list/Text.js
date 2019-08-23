import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Span from '@svelte-material-ui/common/Span.svelte';

function Text(...args) {
  internals.class = 'mdc-list-item__text';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Text.prototype = ClassAdder;

export default Text;