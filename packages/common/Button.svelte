<button
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['element', 'use', 'forwardEvents'])}><slot /></button
>

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
