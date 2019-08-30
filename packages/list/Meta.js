import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Span from '@smui/common/Span.svelte';

function Meta(...args) {
  internals.class = 'mdc-list-item__meta';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Meta.prototype = ClassAdder;

export default Meta;