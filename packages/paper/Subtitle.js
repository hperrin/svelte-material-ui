import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import H6 from '@smui/common/H6.svelte';

function Subtitle(...args) {
  internals.class = 'smui-paper__subtitle';
  internals.component = H6;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Subtitle.prototype = ClassAdder;

export default Subtitle;