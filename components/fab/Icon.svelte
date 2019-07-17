<i class="material-icons mdc-fab__icon {className}" {...exclude($$props, ['className'])}><slot></slot></i>

<script>
  import exclude from '../exclude.js';

  export let className = '';
</script>