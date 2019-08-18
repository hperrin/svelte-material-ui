import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Span from '../common/Span.svelte';

function Text(...args) {
  internals.smuiClass = 'mdc-list-item__text';
  internals.component = Span;
  return new ClassAdder(...args);
}

Text.prototype = ClassAdder;

export default Text;