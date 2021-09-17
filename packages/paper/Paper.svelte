<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-paper': true,
    ['smui-paper--elevation-z' + elevation]: elevation !== 0,
    'smui-paper--rounded': !square,
    ['smui-paper--color-' + color]: color !== 'default',
    'smui-paper-transition': transition,
  })}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    ActionArray,
  } from '@smui/common/internal/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let square = false;
  export let color: 'default' | 'primary' | 'secondary' | string = 'default';
  export let elevation = 1;
  export let transition = false;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
