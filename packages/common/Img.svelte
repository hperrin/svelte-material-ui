<img
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {alt}
  {...$$restProps}
/>
<slot />

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, useActions } from './internal.js';

  export let alt = '';
  export let use = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element = null;

  export function getElement() {
    return element;
  }
</script>
