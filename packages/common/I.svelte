<i bind:this={element} use:useActions={use} use:forwardEvents {...$$restProps}
  ><slot /></i
>

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, useActions } from './internal.js';

  export let use = [];
  let forwardEventsAdditional = [];
  export { forwardEventsAdditional as forwardEvents };

  const forwardEvents = forwardEventsBuilder(
    get_current_component(),
    forwardEventsAdditional
  );

  let element = null;

  export function getElement() {
    return element;
  }
</script>
