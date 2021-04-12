{#if fixed}
  <div bind:this={element} use:forwardEvents class="mdc-banner__fixed">
    <slot />
  </div>
{:else}
  <slot />
{/if}

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let fixed = false;

  let element;

  export function getElement() {
    return element;
  }
</script>
