{#if fixed}
  <div
    bind:this={element}
    use:forwardEvents
    class="mdc-banner__fixed"
    style={width == null ? null : `width: ${width}px;`}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}

<script>
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let fixed = false;
  export let width = null;

  let element;

  export function getElement() {
    return element;
  }
</script>
