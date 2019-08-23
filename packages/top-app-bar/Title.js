import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Span from '@svelte-material-ui/common/Span.svelte';

function Title(...args) {
  internals.class = 'mdc-top-app-bar__title';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;