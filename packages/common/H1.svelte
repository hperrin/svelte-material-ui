<h1 bind:this={element} use:useActions={use} use:forwardEvents {...$$restProps}>
  <slot />
</h1>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './useActions';
  import { forwardEventsBuilder, useActions } from './internal';

  export let use: ActionArray = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: HTMLHeadingElement;

  export function getElement() {
    return element;
  }
</script>
