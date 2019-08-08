import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import H3 from '../common/H3.svelte';

function Subheader(...args) {
  internals.smuiClass = 'mdc-list-group__subheader';
  internals.component = H3;
  return new ClassAdder(...args);
}

Subheader.prototype = ClassAdder;

export default Subheader;