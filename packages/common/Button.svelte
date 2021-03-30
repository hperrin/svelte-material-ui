<button
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['element', 'use', 'forwardEvents'])}><slot /></button
>

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, exclude, useActions } from './internal.js';

  export let element = null;
  export let use = [];
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  const forwardEvents = forwardEventsBuilder(
    get_current_component(),
    forwardEventsAdditional
  );

  export function getElement() {
    return element;
  }
</script>
