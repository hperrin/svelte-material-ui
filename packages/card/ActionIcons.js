import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function ActionIcons(...args) {
  internals.class = 'mdc-card__action-icons';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

ActionIcons.prototype = ClassAdder;

export default ActionIcons;