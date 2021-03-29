<div
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-card__primary-action
    {className}
    {padded
    ? 'smui-card__primary-action--padded'
    : ''}
  "
  use:Ripple={{ ripple, unbounded: false, color }}
  {tabindex}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'color',
    'padded',
    'tabindex',
  ])}
>
  <slot />
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let color = null;
  export let padded = false;
  export let tabindex = '0';
</script>
