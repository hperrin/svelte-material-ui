import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Li from '../common/Li.svelte';

function Item(...args) {
  internals.smuiClass = 'mdc-image-list__item';
  internals.component = Li;
  return new ClassAdder(...args);
}

Item.prototype = ClassAdder;

export default Item;
