<h5
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['element', 'use', 'forwardEvents'])}
>
  <slot />
</h5>

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

  export function getElement() {
    return element;
  }
</script>
