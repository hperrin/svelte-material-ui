import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Header(...args) {
  internals.class = 'mdc-drawer__header';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Header.prototype = ClassAdder;

export default Header;