<li
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
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
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    ActionArray,
  } from '@smui/common/internal/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  export let list$use: ActionArray = [];
  export let list$class = '';

  let element: HTMLLIElement;

  setContext('SMUI:list:graphic:menu-selection-group', true);

  export function getElement() {
    return element;
  }
</script>
