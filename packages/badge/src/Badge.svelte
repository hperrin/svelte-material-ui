<svelte:options runes={true} />

<span
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'smui-badge': true,
    'smui-badge--rounded': !square,
    ['smui-badge--color-' + color]: true,
    ['smui-badge--position-' + position]: true,
    ['smui-badge--align-' + align]: true,
  })}
  role="status"
  {...restProps}
>
  {#if children}{@render children()}{/if}
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
    /**
     * Square off the corners, instead of rounding them.
     */
    square?: boolean;
    /**
     * The color of the badge.
     */
    color?: 'primary' | 'secondary' | string;
    /**
     * The position of the badge relative to the edge/corner it is aligned to.
     */
    position?: 'inset' | 'middle' | 'outset';
    /**
     * The edge or corner to align the badge to.
     */
    align?:
      | 'top-start'
      | 'top-middle'
      | 'top-end'
      | 'middle-start'
      | 'middle-middle'
      | 'middle-end'
      | 'bottom-start'
      | 'bottom-middle'
      | 'bottom-end';

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    square = false,
    color = 'primary',
    position = 'middle',
    align = 'top-end',
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'span', keyof OwnProps> = $props();

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
