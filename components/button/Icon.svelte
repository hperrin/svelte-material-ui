<i class="material-icons mdc-button__icon {className}" aria-hidden="true" {...exclude($$props, ['class'])}><slot></slot></i>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
</script>