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

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  export let list$use = [];
  export let list$class = '';

  let element;

  setContext('SMUI:list:graphic:menu-selection-group', true);

  export function getElement() {
    return element;
  }
</script>
