import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Graphic from '../list/Graphic.js';

function SelectionGroupIcon(...args) {
  internals.class = 'mdc-menu__selection-group-icon';
  internals.component = Graphic;
  return new ClassAdder(...args);
}

SelectionGroupIcon.prototype = ClassAdder;

export default SelectionGroupIcon;