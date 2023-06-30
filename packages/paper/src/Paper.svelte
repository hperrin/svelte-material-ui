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
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    variant?: 'raised' | 'unelevated' | 'outlined';
    square?: boolean;
    color?: 'default' | 'primary' | 'secondary' | string;
    elevation?: number;
    transition?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
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
