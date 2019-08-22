import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Content(...args) {
  internals.class = 'mdc-dialog__content';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Content.prototype = ClassAdder;

export default Content;