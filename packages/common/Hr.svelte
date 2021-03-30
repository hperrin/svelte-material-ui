<hr
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['element', 'use', 'forwardEvents'])}
/>

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

  export function dispatchEvent(event) {
    element.dispatchEvent(event);
  }
</script>
