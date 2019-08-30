import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function ActionButtons(...args) {
  internals.class = 'mdc-card__action-buttons';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

ActionButtons.prototype = ClassAdder;

export default ActionButtons;