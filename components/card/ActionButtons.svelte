<div class="mdc-card__action-buttons {className}" {...exclude($$props, ['className'])}><slot></slot></div>

<script>
  import {exclude} from '../exclude';

  export let className = '';
</script>