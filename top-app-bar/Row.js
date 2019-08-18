import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Row(...args) {
  internals.smuiClass = 'mdc-top-app-bar__row';
  internals.component = Div;
  return new ClassAdder(...args);
}

Row.prototype = ClassAdder;

export default Row;