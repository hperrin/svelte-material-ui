import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Li from '@smui/common/Li.svelte';

function Item(...args) {
  internals.class = 'mdc-image-list__item';
  internals.component = Li;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Item.prototype = ClassAdder;

export default Item;
