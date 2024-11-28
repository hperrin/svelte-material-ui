<svelte:options runes />

{#if fixed}
  <div
    bind:this={element}
    class="mdc-banner__fixed"
    style={width == null ? undefined : `width: ${width}px;`}
    {...restProps}
  >
    {@render children?.()}
  </div>
{:else}
  {@render children?.()}
{/if}

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';

  type OwnProps = {
    fixed?: boolean;
    width?: number;

    children?: Snippet;
  };
  let {
    fixed = false,
    width,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement = $state() as HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
