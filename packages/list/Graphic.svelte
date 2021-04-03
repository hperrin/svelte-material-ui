<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-list-item__graphic {className} {menuSelectionGroup
    ? 'mdc-menu__selection-group-icon'
    : ''}"
  {...exclude($$props, ['use', 'class'])}><slot /></span
>

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let menuSelectionGroup = getContext('SMUI:list:graphic:menu-selection-group');

  export function getElement() {
    return element;
  }
</script>
