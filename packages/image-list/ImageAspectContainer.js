import ClassAdder, {internals} from '@smui/common/ClassAdder.svelte';
import Div from '@smui/common/Div.svelte';

function ImageAspectContainer(...args) {
  internals.class = 'mdc-image-list__image-aspect-container';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

ImageAspectContainer.prototype = ClassAdder;

export default ImageAspectContainer;
