<a
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {href}
  {...exclude($$props, ['element', 'use', 'forwardEvents', 'href'])}><slot /></a
>

<script>
  import { createEventDispatcher } from 'svelte';
  import { forwardEventsBuilder, exclude, useActions } from './internal.js';

  export let href = 'javascript:void(0);';
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
