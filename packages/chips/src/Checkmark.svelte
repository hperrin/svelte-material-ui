<svelte:options runes />

<span
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-chip__checkmark': true,
  })}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
      <path
        class="mdc-chip__checkmark-path"
        fill="none"
        stroke="black"
        d="M1.73,12.91 8.1,19.28 22.79,4.59"
      />
    </svg>
  {/if}
</span>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'span', keyof OwnProps> = $props();

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
