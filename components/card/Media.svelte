<div
  class="mdc-card__media {className}"
  class:mdc-card__media--square={aspectRatio === 'square'}
  class:mdc-card__media--16-9={aspectRatio === '16x9'}
  {...exclude($$props, ['className', 'aspectRatio'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude';

  export let className = '';
  export let aspectRatio = null;
</script>