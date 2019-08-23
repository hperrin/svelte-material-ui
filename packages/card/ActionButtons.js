import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function ActionButtons(...args) {
  internals.class = 'mdc-card__action-buttons';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

ActionButtons.prototype = ClassAdder;

export default ActionButtons;