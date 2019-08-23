import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Graphic from '@svelte-material-ui/list/Graphic.js';

function SelectionGroupIcon(...args) {
  internals.class = 'mdc-menu__selection-group-icon';
  internals.component = Graphic;
  internals.contexts = {};
  return new ClassAdder(...args);
}

SelectionGroupIcon.prototype = ClassAdder;

export default SelectionGroupIcon;