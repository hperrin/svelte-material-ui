<a
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {href}
  {...$$restProps}><slot /></a
>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, useActions } from './internal';
  import type { ActionArray } from './useActions';

  export let href = 'javascript:void(0);';
  export let use: ActionArray = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLAnchorElement;

  export function getElement() {
    return element;
  }
</script>
