<div
  use:useActions={use}
  class="mdc-dialog__content {className}"
  {...exclude($$props, ['use', 'class'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  export let use = [];
  let className = '';
  export {className as class};
</script>