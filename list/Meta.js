import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Span from '../common/Span.svelte';

function Meta(...args) {
  internals.smuiClass = 'mdc-list-item__meta';
  internals.component = Span;
  return new ClassAdder(...args);
}

Meta.prototype = ClassAdder;

export default Meta;