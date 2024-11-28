<svelte:options runes />

<li bind:this={element} use:useActions={use} {...exclude(restProps, ['list$'])}>
  <ul
    use:useActions={list$use}
    class={classMap({
      [list$class]: true,
      'mdc-menu__selection-group': true,
    })}
    {...prefixFilter(restProps, 'list$')}
  >
    {@render children?.()}
  </ul>
</li>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    list$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    list$class?: string;

    children?: Snippet;
  };
  let {
    use = [],
    list$use = [],
    list$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'li', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['ul'] as `list\$${k}`]?: SmuiElementPropMap['ul'][k];
    } = $props();

  let element: HTMLLIElement;

  setContext('SMUI:list:graphic:menu-selection-group', true);

  export function getElement() {
    return element;
  }
</script>
