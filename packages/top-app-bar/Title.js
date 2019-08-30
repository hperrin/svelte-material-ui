import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Span from '@smui/common/Span.svelte';

function Title(...args) {
  internals.class = 'mdc-top-app-bar__title';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;