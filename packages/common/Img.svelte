<img
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {alt}
  {...exclude($$props, ['element', 'use', 'forwardEvents', 'alt'])}
/>

<script>
  import { createEventDispatcher } from 'svelte';
  import { forwardEventsBuilder, exclude, useActions } from './internal.js';

  export let alt = '';
  export let element = null;
  export let use = [];
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  const forwardEvents = forwardEventsBuilder(
    createEventDispatcher(),
    forwardEventsAdditional
  );

  export function dispatchEvent(event) {
    element.dispatchEvent(event);
  }
</script>
