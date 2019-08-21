import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import H5 from '../common/H5.svelte';

function Title(...args) {
  internals.class = 'smui-paper__title';
  internals.component = H5;
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;