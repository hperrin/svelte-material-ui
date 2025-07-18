<svelte:options runes />

<Paper
  bind:this={element}
  {use}
  class={classMap({
    'smui-bottom-app-bar__section': true,
    'smui-bottom-app-bar__section--fab-inset': fabInset,
    [className]: true,
  })}
  color={$color}
  variant="unelevated"
  square
  {...restProps}>{@render children?.()}</Paper
>

<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap } from '@smui/common/internal';
  import Paper from '@smui/paper';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * Use an inset cutout styling for the FAB.
     */
    fabInset?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    fabInset = false,
    children,
    ...restProps
  }: Omit<ComponentProps<typeof Paper>, keyof OwnProps> &
    OwnProps & {
      color?: never;
      variant?: never;
      square?: never;
    } = $props();

  let element: Paper;

  const color = getContext<
    SvelteStore<'default' | 'primary' | 'secondary' | string>
  >('SMUI:bottom-app-bar:color');

  export function getElement() {
    return element.getElement();
  }
</script>
