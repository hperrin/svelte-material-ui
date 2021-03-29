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
  import { getContext, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };

  let menuSelectionGroup = getContext('SMUI:list:graphic:menu-selection-group');
</script>
