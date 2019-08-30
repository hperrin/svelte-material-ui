import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function MediaContent(...args) {
  internals.class = 'mdc-card__media-content';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

MediaContent.prototype = ClassAdder;

export default MediaContent;