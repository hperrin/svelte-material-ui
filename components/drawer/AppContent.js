import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function AppContent(...args) {
  internals.smuiClass = 'mdc-drawer-app-content';
  internals.component = Div;
  return new ClassAdder(...args);
}

AppContent.prototype = ClassAdder;

export default AppContent;