<Paper
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'smui-bottom-app-bar__section': true,
    'smui-bottom-app-bar__section--fab-inset': fabInset,
  })}
  color={$color}
  variant="unelevated"
  square
  {...$$restProps}><slot /></Paper
>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { getContext } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap } from '@smui/common/internal';
  import Paper from '@smui/paper';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    fabInset?: boolean;
  };
  type $$Props = Omit<ComponentProps<Paper>, keyof OwnProps> &
    OwnProps & {
      color?: never;
      variant?: never;
      square?: never;
    };

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fabInset = false;

  let element: Paper;

  const color = getContext<
    SvelteStore<'default' | 'primary' | 'secondary' | string>
  >('SMUI:bottom-app-bar:color');

  export function getElement() {
    return element.getElement();
  }
</script>
