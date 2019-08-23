import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function AppContent(...args) {
  internals.class = 'mdc-drawer-app-content';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

AppContent.prototype = ClassAdder;

export default AppContent;