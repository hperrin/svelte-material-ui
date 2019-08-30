import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function Content(...args) {
  internals.class = 'mdc-drawer__content';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Content.prototype = ClassAdder;

export default Content;