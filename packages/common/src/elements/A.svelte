<a
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {href}
  {...$$restProps}><slot /></a
>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from '../internal/useActions.js';
  import { forwardEventsBuilder, useActions } from '../internal/index.js';

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  export let href = 'javascript:void(0);';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLAnchorElement;

  export function getElement() {
    return element;
  }
</script>
