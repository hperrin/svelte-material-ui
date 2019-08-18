import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Supporting(...args) {
  internals.smuiClass = 'mdc-image-list__supporting';
  internals.component = Div;
  return new ClassAdder(...args);
}

Supporting.prototype = ClassAdder;

export default Supporting;
