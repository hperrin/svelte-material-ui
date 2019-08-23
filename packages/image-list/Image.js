import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Img from '@svelte-material-ui/common/Img.svelte';

function Image(...args) {
  internals.class = 'mdc-image-list__image';
  internals.component = Img;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Image.prototype = ClassAdder;

export default Image;
