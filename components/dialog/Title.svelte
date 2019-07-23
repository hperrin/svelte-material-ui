<h2
  use:useActions={use}
  class="mdc-dialog__title {className}"
  {...exclude($$props, ['use', 'class'])}
><slot></slot></h2>

<script>
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  export let use = [];
  let className = '';
  export {className as class};
</script>