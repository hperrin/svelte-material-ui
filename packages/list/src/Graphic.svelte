<svelte:options runes={false} />

<span
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-item__graphic': true,
    'mdc-menu__selection-group-icon': menuSelectionGroup,
  })}
  {...$$restProps}><slot /></span
>

<script lang="ts">
  import { getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
  };
  type $$Props = OwnProps & SmuiAttrs<'span', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLSpanElement;
  let menuSelectionGroup = getContext('SMUI:list:graphic:menu-selection-group');

  export function getElement() {
    return element;
  }
</script>
