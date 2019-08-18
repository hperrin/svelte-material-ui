import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function ActionButtons(...args) {
  internals.smuiClass = 'mdc-card__action-buttons';
  internals.component = Div;
  return new ClassAdder(...args);
}

ActionButtons.prototype = ClassAdder;

export default ActionButtons;