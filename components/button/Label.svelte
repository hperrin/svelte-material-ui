<span class="mdc-button__label {className}" {...exclude($$props, ['className'])}><slot></slot></span>

<script>
  import exclude from '../exclude.js';

  export let className = '';
</script>