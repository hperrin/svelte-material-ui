import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import H1 from '@smui/common/H1.svelte';

function Title(...args) {
  internals.class = 'mdc-drawer__title';
  internals.component = H1;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;