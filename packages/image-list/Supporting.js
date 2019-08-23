import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function Supporting(...args) {
  internals.class = 'mdc-image-list__supporting';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Supporting.prototype = ClassAdder;

export default Supporting;
