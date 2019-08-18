import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import H2 from '../common/H2.svelte';

function Subtitle(...args) {
  internals.smuiClass = 'mdc-drawer__subtitle';
  internals.component = H2;
  return new ClassAdder(...args);
}

Subtitle.prototype = ClassAdder;

export default Subtitle;