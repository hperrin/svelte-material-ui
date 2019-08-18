import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import H1 from '../common/H1.svelte';

function Title(...args) {
  internals.smuiClass = 'mdc-drawer__title';
  internals.component = H1;
  return new ClassAdder(...args);
}

Title.prototype = ClassAdder;

export default Title;