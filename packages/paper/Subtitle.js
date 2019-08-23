import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import H6 from '@svelte-material-ui/common/H6.svelte';

function Subtitle(...args) {
  internals.class = 'smui-paper__subtitle';
  internals.component = H6;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Subtitle.prototype = ClassAdder;

export default Subtitle;