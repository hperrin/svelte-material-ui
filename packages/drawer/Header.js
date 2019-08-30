import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function Header(...args) {
  internals.class = 'mdc-drawer__header';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Header.prototype = ClassAdder;

export default Header;