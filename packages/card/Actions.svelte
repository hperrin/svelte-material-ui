<div
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-card__actions
    {className}
    {fullBleed
    ? 'mdc-card__actions--full-bleed'
    : ''}
  "
  {...exclude($$props, ['use', 'class', 'fullBleed'])}
>
  <slot />
</div>

<script>
  import { setContext, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };
  export let fullBleed = false;

  setContext('SMUI:button:context', 'card:action');
  setContext('SMUI:icon-button:context', 'card:action');
</script>
