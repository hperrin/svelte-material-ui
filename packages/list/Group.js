import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function Group(...args) {
  internals.class = 'mdc-list-group';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Group.prototype = ClassAdder;

export default Group;
