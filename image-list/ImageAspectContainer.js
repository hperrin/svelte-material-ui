import ClassAdder, {internals} from '../common/ClassAdder.svelte';
import Div from '../common/Div.svelte';

function ImageAspectContainer(...args) {
  internals.smuiClass = 'mdc-image-list__image-aspect-container';
  internals.component = Div;
  return new ClassAdder(...args);
}

ImageAspectContainer.prototype = ClassAdder;

export default ImageAspectContainer;
