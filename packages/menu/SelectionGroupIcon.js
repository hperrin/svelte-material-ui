import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Graphic from '@smui/list/Graphic.js';

function SelectionGroupIcon(...args) {
  internals.class = 'mdc-menu__selection-group-icon';
  internals.component = Graphic;
  internals.contexts = {};
  return new ClassAdder(...args);
}

SelectionGroupIcon.prototype = ClassAdder;

export default SelectionGroupIcon;