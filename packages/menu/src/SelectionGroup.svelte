<svelte:options runes={false} />

<li
  bind:this={element}
  use:useActions={use}
  {...exclude($$restProps, ['list$'])}
>
  <ul
    use:useActions={list$use}
    class={classMap({
      [list$class]: true,
      'mdc-menu__selection-group': true,
    })}
    {...prefixFilter($$restProps, 'list$')}
  >
    <slot />
  </ul>
</li>

<script lang="ts">
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
    use?: ActionArray;
    list$use?: ActionArray;
    list$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'li', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['ul'] as `list\$${k}`]?: SmuiElementPropMap['ul'][k];
    };

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  export let list$use: ActionArray = [];
  export let list$class = '';

  let element: HTMLLIElement;

  setContext('SMUI:list:graphic:menu-selection-group', true);

  export function getElement() {
    return element;
  }
</script>
