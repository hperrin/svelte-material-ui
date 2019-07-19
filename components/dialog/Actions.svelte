<footer class="mdc-dialog__actions {className}" {...exclude($$props, ['class'])}><slot></slot></footer>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
</script>