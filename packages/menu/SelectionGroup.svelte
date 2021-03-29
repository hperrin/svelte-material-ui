<li
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
  import { setContext, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  export let list$use = [];
  export let list$class = '';

  setContext('SMUI:list:graphic:menu-selection-group', true);
</script>
