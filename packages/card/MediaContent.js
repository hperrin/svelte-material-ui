import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function MediaContent(...args) {
  internals.class = 'mdc-card__media-content';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

MediaContent.prototype = ClassAdder;

export default MediaContent;