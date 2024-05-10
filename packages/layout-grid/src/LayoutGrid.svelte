<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-layout-grid': true,
    'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
    ['mdc-layout-grid--align-' + align]: align != null,
  })}
  {...exclude($$restProps, ['innerGrid$'])}
>
  <InnerGrid {...prefixFilter($$restProps, 'innerGrid$')}>
    <slot />
  </InnerGrid>
</div>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
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
    use?: ActionArray;
    class?: string;
    fixedColumnWidth?: boolean;
    align?: 'left' | 'right' | undefined;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<InnerGrid> as `innerGrid\$${k}`]?: ComponentProps<InnerGrid>[k];
    };

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fixedColumnWidth = false;
  export let align: 'left' | 'right' | undefined = undefined;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
