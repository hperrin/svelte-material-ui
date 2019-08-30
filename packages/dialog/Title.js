import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import H2 from '@smui/common/H2.svelte';

function Title(...args) {
  internals.class = 'mdc-dialog__title';
  internals.component = H2;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;