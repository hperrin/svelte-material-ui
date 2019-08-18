<div
  use:useActions={use}
  class="mdc-card__actions {className}"
  class:mdc-card__actions--full-bleed={fullBleed}
  {...exclude($$props, ['use', 'class', 'fullBleed'])}
><slot></slot></div>

<script>
  import {setContext} from 'svelte';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  export let use = [];
  let className = '';
  export {className as class};
  export let fullBleed = false;

  setContext('SMUI:button:context', 'card:action');
  setContext('SMUI:icon-button:context', 'card:action');
</script>