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
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/forwardEvents.js';
  import { exclude } from '@smui/common/exclude.js';
  import { prefixFilter } from '@smui/common/prefixFilter.js';
  import { useActions } from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  export let list$use = [];
  export let list$class = '';

  setContext('SMUI:list:graphic:menu-selection-group', true);
</script>
