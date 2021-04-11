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

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let square = false;
  export let color = 'default';
  export let elevation = 1;
  export let transition = false;

  let element;

  export function getElement() {
    return element;
  }
</script>
