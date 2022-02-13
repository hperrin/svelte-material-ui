<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-card': true,
    'mdc-card--outlined': variant === 'outlined',
    'smui-card--padded': padded,
  })}
  {...$$restProps}
>
  <slot />
</div>

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
  export let variant: 'raised' | 'outlined' = 'raised';
  export let padded = false;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
