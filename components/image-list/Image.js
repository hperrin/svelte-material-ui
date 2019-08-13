import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Img from '../common/Img.svelte';

function Image(...args) {
  internals.smuiClass = 'mdc-image-list__image';
  internals.component = Img;
  return new ClassAdder(...args);
}

Image.prototype = ClassAdder;

export default Image;
