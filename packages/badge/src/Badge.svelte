<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-badge': true,
    'smui-badge--rounded': !square,
    ['smui-badge--color-' + color]: true,
    ['smui-badge--position-' + position]: true,
    ['smui-badge--align-' + align]: true,
  })}
  role="status"
  {...$$restProps}
>
  <slot />
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
  export let square = false;
  export let color: 'primary' | 'secondary' | string = 'primary';
  export let position: 'inset' | 'middle' | 'outset' = 'middle';
  export let align: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' =
    'top-end';

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
