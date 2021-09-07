<svg bind:this={element} use:useActions={use} use:forwardEvents {...$$restProps}
  ><slot /></svg
>

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, useActions } from './internal.js';

  export let use = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element = null;

  export function getElement() {
    return element;
  }
</script>
