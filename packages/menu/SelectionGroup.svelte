<li
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['use', 'list$'])}
>
  <ul
    use:useActions={list$use}
    class="mdc-menu__selection-group {list$class}"
    {...exclude(prefixFilter($$props, 'list$'), ['use', 'class'])}
  >
    <slot />
  </ul>
</li>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
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
