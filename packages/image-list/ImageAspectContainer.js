import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Div from '@svelte-material-ui/common/Div.svelte';

function ImageAspectContainer(...args) {
  internals.class = 'mdc-image-list__image-aspect-container';
  internals.component = Div;
  internals.contexts = {};
  return new ClassAdder(...args);
}

ImageAspectContainer.prototype = ClassAdder;

export default ImageAspectContainer;
