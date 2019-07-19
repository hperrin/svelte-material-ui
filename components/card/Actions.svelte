<div
  class="mdc-card__actions {className}"
  class:mdc-card__actions--full-bleed={fullBleed}
  {...exclude($$props, ['class', 'fullBleed'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let fullBleed = false;
</script>