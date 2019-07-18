<i class="material-icons mdc-button__icon {className}" aria-hidden="true" {...exclude($$props, ['className'])}><slot></slot></i>

<script>
  import {exclude} from '../exclude';

  export let className = '';
</script>