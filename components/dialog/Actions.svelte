<footer
  use:useActions={use}
  class="mdc-dialog__actions {className}"
  {...exclude($$props, ['use', 'class'])}
><slot></slot></footer>

<script>
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  export let use = [];
  let className = '';
  export {className as class};
</script>