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
    square?: boolean;
    color?: 'primary' | 'secondary' | string;
    position?: 'inset' | 'middle' | 'outset';
    align?:
      | 'top-start'
      | 'top-middle'
      | 'top-end'
      | 'middle-start'
      | 'middle-middle'
      | 'middle-end'
      | 'bottom-start'
      | 'bottom-middle'
      | 'bottom-end';
  };
  type $$Props = OwnProps & SmuiAttrs<'span', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let square = false;
  export let color: 'primary' | 'secondary' | string = 'primary';
  export let position: 'inset' | 'middle' | 'outset' = 'middle';
  export let align:
    | 'top-start'
    | 'top-middle'
    | 'top-end'
    | 'middle-start'
    | 'middle-middle'
    | 'middle-end'
    | 'bottom-start'
    | 'bottom-middle'
    | 'bottom-end' = 'top-end';

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
