import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Span from '../common/Span.svelte';

function PrimaryText(...args) {
  internals.smuiClass = 'mdc-list-item__primary-text';
  internals.component = Span;
  return new ClassAdder(...args);
}

PrimaryText.prototype = ClassAdder;

export default PrimaryText;