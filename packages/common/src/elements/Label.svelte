<label
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  for={forId}
  {...$$restProps}
>
  <slot />
</label>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from '../internal/useActions.js';
  import { forwardEventsBuilder, useActions } from '../internal/index.js';

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let forId: string | undefined = undefined;
  export { forId as for };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLLabelElement;

  export function getElement() {
    return element;
  }
</script>
