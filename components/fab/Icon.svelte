<i class="material-icons mdc-fab__icon {className}" {...exclude($$props, ['class'])}><slot></slot></i>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
</script>