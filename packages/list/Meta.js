import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Span from '@svelte-material-ui/common/Span.svelte';

function Meta(...args) {
  internals.class = 'mdc-list-item__meta';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Meta.prototype = ClassAdder;

export default Meta;