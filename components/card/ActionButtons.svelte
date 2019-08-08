<div
  class="mdc-card__action-buttons {className}"
  {...exclude($$props, ['class'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude.js';

  let className = '';
  export {className as class};
</script>