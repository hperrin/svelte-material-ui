import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import H6 from '../common/H6.svelte';

function Subtitle(...args) {
  internals.class = 'smui-paper__subtitle';
  internals.component = H6;
  return new ClassAdder(...args);
}

Subtitle.prototype = ClassAdder;

export default Subtitle;