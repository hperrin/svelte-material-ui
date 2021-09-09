<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, useActions } from './internal';
  import type { ActionArray } from './useActions';

  export let use: ActionArray = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
