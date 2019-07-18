<div
  class="mdc-card__actions {className}"
  class:mdc-card__actions--full-bleed={fullBleed}
  {...exclude($$props, ['className', 'fullBleed'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude';

  export let className = '';
  export let fullBleed = false;
</script>