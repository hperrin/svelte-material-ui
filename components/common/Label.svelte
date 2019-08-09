<span
  use:useActions={use}
  class="{className}"
  class:mdc-button__label={context === 'button'}
  class:mdc-fab__label={context === 'fab'}
  class:mdc-chip__text={context === 'chips'}
  {...exclude($$props, ['use', 'class'])}
><slot></slot></span>

<script>
  import {getContext} from 'svelte';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  export let use = [];
  let className = '';
  export {className as class};

  const context = getContext('SMUI:label:context');
</script>