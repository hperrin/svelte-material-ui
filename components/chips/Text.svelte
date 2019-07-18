<div class="mdc-chip__text {className}" {...exclude($$props, ['className'])}><slot></slot></div>

<script>
  import {exclude} from '../exclude.js';

  export let className = '';
</script>