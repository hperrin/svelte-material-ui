import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Span from '../common/Span.svelte';

function Title(...args) {
  internals.smuiClass = 'mdc-top-app-bar__title';
  internals.component = Span;
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;