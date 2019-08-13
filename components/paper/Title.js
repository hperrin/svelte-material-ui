import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import H5 from '../common/H5.svelte';

function Title(...args) {
  internals.smuiClass = 'smui-paper__title';
  internals.component = H5;
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;