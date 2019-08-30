import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function AppContent(...args) {
  internals.class = 'mdc-drawer-app-content';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

AppContent.prototype = ClassAdder;

export default AppContent;