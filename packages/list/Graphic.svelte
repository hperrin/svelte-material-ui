<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-list-item__graphic': true,
    'mdc-menu__selection-group-icon': menuSelectionGroup,
  })}
  {...exclude($$props, ['use', 'class'])}><slot /></span
>

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:generic:input:mount',
    'SMUI:generic:input:unmount',
  ]);

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let menuSelectionGroup = getContext('SMUI:list:graphic:menu-selection-group');

  export function getElement() {
    return element;
  }
</script>
