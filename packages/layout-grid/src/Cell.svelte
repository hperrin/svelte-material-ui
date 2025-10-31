<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'mdc-layout-grid__cell': true,
    ['mdc-layout-grid__cell--align-' + align]: align != null,
    ['mdc-layout-grid__cell--order-' + order]: order != null,
    ['mdc-layout-grid__cell--span-' + span]: span != null,
    ...Object.fromEntries(
      Object.entries(spanDevices).map(([device, span]) => [
        `mdc-layout-grid__cell--span-${span}-${device}`,
        true,
      ]),
    ),
    [className]: true,
  })}
  {...restProps}
>
  {@render children?.()}
</div>

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
     * Where to align this cell, vertically.
     */
    align?: 'top' | 'middle' | 'bottom' | undefined;
    /**
     * Change the order of this cell.
     */
    order?: number | undefined;
    /**
     * How many columns this cell should span.
     *
     * This number is out of 12 on desktop, 8 on tablet, and 4 on mobile.
     */
    span?: number | undefined;
    /**
     * How many columns this cell should span on different size screens.
     *
     * This number is out of 12 on desktop, 8 on tablet, and 4 on mobile.
     */
    spanDevices?: {
      desktop?: number;
      tablet?: number;
      phone?: number;
    };

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    align = undefined,
    order = undefined,
    span = undefined,
    spanDevices = {},
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
