import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import H5 from '@smui/common/H5.svelte';

function Title(...args) {
  internals.class = 'smui-paper__title';
  internals.component = H5;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;