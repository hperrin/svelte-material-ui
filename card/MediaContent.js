import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function MediaContent(...args) {
  internals.class = 'mdc-card__media-content';
  internals.component = Div;
  return new ClassAdder(...args);
}

MediaContent.prototype = ClassAdder;

export default MediaContent;