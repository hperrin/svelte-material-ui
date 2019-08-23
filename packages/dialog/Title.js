import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import H2 from '@svelte-material-ui/common/H2.svelte';

function Title(...args) {
  internals.class = 'mdc-dialog__title';
  internals.component = H2;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;