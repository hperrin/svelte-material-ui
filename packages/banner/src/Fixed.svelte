<svelte:options runes={false} />

{#if fixed}
  <div
    bind:this={element}
    class="mdc-banner__fixed"
    style={width == null ? undefined : `width: ${width}px;`}
    {...$$restProps}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}

<script lang="ts">
  export let fixed = false;
  export let width: number | undefined = undefined;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
