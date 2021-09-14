<img
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {alt}
  {...$$restProps}
/>
<slot />

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './useActions';
  import { forwardEventsBuilder, useActions } from './internal';

  export let alt = '';
  export let use: ActionArray = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLImageElement;

  export function getElement() {
    return element;
  }
</script>
