import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import H2 from '@svelte-material-ui/common/H2.svelte';

function Subtitle(...args) {
  internals.class = 'mdc-drawer__subtitle';
  internals.component = H2;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Subtitle.prototype = ClassAdder;

export default Subtitle;