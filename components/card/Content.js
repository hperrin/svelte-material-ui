import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function Content(...args) {
  internals.smuiClass = 'smui-card__content';
  internals.component = Div;
  return new ClassAdder(...args);
}

Content.prototype = ClassAdder;

export default Content;