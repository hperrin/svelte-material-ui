<svelte:options runes={true} />

<span
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-item__graphic': true,
    'mdc-menu__selection-group-icon': menuSelectionGroup,
  })}
  {...restProps}
  >{#if children}{@render children()}{/if}</span
>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
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
  let menuSelectionGroup = getContext('SMUI:list:graphic:menu-selection-group');

  export function getElement() {
    return element;
  }
</script>
