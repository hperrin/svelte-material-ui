import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Header(...args) {
  internals.smuiClass = 'mdc-drawer__header';
  internals.component = Div;
  return new ClassAdder(...args);
}

Header.prototype = ClassAdder;

export default Header;