import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Group(...args) {
  internals.class = 'mdc-list-group';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Group.prototype = ClassAdder;

export default Group;
