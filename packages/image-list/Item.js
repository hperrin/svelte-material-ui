import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Li from '@svelte-material-ui/common/Li.svelte';

function Item(...args) {
  internals.class = 'mdc-image-list__item';
  internals.component = Li;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Item.prototype = ClassAdder;

export default Item;
