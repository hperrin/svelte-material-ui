import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import H1 from '@svelte-material-ui/common/H1.svelte';

function Title(...args) {
  internals.class = 'mdc-drawer__title';
  internals.component = H1;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;