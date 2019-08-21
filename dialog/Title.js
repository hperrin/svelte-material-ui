import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import H2 from '../common/H2.svelte';

function Title(...args) {
  internals.class = 'mdc-dialog__title';
  internals.component = H2;
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;