<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  role="gridcell"
>
  <i
    class={classMap({
      [className]: true,
      'mdc-chip__icon': true,
      'mdc-chip__icon--trailing': true,
    })}
    {...$$restProps}><slot /></i
  >
</span>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
