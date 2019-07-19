<h2 class="mdc-dialog__title {className}" {...exclude($$props, ['class'])}><slot></slot></h2>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
</script>