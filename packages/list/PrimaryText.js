import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Span from '../common/Span.svelte';

function PrimaryText(...args) {
  internals.class = 'mdc-list-item__primary-text';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

PrimaryText.prototype = ClassAdder;

export default PrimaryText;