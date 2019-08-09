import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function ActionIcons(...args) {
  internals.smuiClass = 'mdc-card__action-icons';
  internals.component = Div;
  return new ClassAdder(...args);
}

ActionIcons.prototype = ClassAdder;

export default ActionIcons;