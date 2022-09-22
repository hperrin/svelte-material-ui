<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-button__group': true,
    'smui-button__group--raised': variant === 'raised',
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

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    variant?: 'text' | 'raised' | 'unelevated' | 'outlined';
  };
  type $$Props = {
    [P in Exclude<
      keyof svelteHTML.IntrinsicElements['div'],
      keyof OwnProps
    >]?: svelteHTML.IntrinsicElements['div'][P];
  } & OwnProps;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let variant: 'text' | 'raised' | 'unelevated' | 'outlined' = 'text';

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
