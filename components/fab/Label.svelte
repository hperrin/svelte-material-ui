<span class="mdc-fab__label {className}" {...exclude($$props, ['className'])}><slot></slot></span>

<script>
  import {exclude} from '../exclude';

  export let className = '';
</script>