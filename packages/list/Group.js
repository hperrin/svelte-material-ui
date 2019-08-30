import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function Group(...args) {
  internals.class = 'mdc-list-group';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Group.prototype = ClassAdder;

export default Group;
