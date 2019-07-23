<div
  use:useActions={use}
  class="mdc-card__actions {className}"
  class:mdc-card__actions--full-bleed={fullBleed}
  {...exclude($$props, ['use', 'class', 'fullBleed'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  export let use = [];
  let className = '';
  export {className as class};
  export let fullBleed = false;
</script>