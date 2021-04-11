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
  export let variant = 'raised';
  export let padded = false;

  let element;

  export function getElement() {
    return element;
  }
</script>
