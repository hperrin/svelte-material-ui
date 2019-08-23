import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function Content(...args) {
  internals.class = 'smui-card__content';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Content.prototype = ClassAdder;

export default Content;