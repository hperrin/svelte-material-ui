import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Span from '../common/Span.svelte';

function SecondaryText(...args) {
  internals.smuiClass = 'mdc-list-item__secondary-text';
  internals.component = Span;
  return new ClassAdder(...args);
}

SecondaryText.prototype = ClassAdder;

export default SecondaryText;