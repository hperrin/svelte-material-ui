import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function ActionIcons(...args) {
  internals.class = 'mdc-card__action-icons';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

ActionIcons.prototype = ClassAdder;

export default ActionIcons;