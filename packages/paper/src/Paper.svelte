<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-paper': true,
    'smui-paper--raised': variant === 'raised',
    'smui-paper--unelevated': variant === 'unelevated',
    'smui-paper--outlined': variant === 'outlined',
    ['smui-paper--elevation-z' + elevation]:
      elevation !== 0 && variant === 'raised',
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
  export let variant: 'raised' | 'unelevated' | 'outlined' = 'raised';
  export let square = false;
  export let color: 'default' | 'primary' | 'secondary' | string = 'default';
  export let elevation = 1;
  export let transition = false;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
