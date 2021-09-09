<nav
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...$$restProps}
>
  <slot />
</nav>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, useActions } from './internal';
  import type { ActionArray } from './useActions';

  export let use: ActionArray = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLElement;

  export function getElement() {
    return element;
  }
</script>
