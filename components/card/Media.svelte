<div
  class="mdc-card__media {className}"
  class:mdc-card__media--square={aspectRatio === 'square'}
  class:mdc-card__media--16-9={aspectRatio === '16x9'}
  {...exclude($$props, ['class', 'aspectRatio'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude.js';

  let className = '';
  export {className as class};
  export let aspectRatio = null;
</script>