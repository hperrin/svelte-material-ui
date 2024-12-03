<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-layout-grid': true,
    'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
    ['mdc-layout-grid--align-' + align]: align != null,
  })}
  {...exclude(restProps, ['innerGrid$'])}
>
  <InnerGrid {...prefixFilter(restProps, 'innerGrid$')}>
    {@render children?.()}
  </InnerGrid>
</div>

<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

  import InnerGrid from './InnerGrid.svelte';

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
     * Whether to use a fixed column width instead of variable.
     */
    fixedColumnWidth?: boolean;
    /**
     * Where to align the cells horizontally, if not default.
     */
    align?: 'left' | 'right' | undefined;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    fixedColumnWidth = false,
    align = undefined,
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<
        typeof InnerGrid
      > as `innerGrid\$${k}`]?: ComponentProps<typeof InnerGrid>[k];
    } = $props();

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
