<span
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-list-item__graphic
    {className}
    {menuSelectionGroup
    ? 'mdc-menu__selection-group-icon'
    : ''}
    "
  {...exclude($$props, ['use', 'class'])}><slot /></span
>

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/forwardEvents.js';
  import { exclude } from '@smui/common/exclude.js';
  import { useActions } from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let menuSelectionGroup = getContext('SMUI:list:graphic:menu-selection-group');
</script>
