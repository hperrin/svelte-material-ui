<h3
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['element', 'use', 'forwardEvents'])}
>
  <slot />
</h3>

<script>
  import { createEventDispatcher } from 'svelte';
  import { forwardEventsBuilder, exclude, useActions } from './internal.js';

  export let element = null;
  export let use = [];
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  const forwardEvents = forwardEventsBuilder(
    createEventDispatcher(),
    forwardEventsAdditional
  );
</script>
