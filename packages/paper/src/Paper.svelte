<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
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
  {...restProps}
>
  {@render children?.()}
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

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
     * The visual variant of the Paper.
     */
    variant?: 'raised' | 'unelevated' | 'outlined';
    /**
     * When true, removes the rounded corners.
     */
    square?: boolean;
    /**
     * The color styling to apply to the Paper.
     *
     * Default, primary, and secondary are provided by SMUI. You can use custom
     * scss styling to add your own color styling.
     */
    color?: 'default' | 'primary' | 'secondary' | string;
    /**
     * The elevation styling to apply to the Paper.
     */
    elevation?: number;
    /**
     * Whether transition animation styling should be applied to the Paper.
     */
    transition?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    variant = 'raised',
    square = false,
    color = 'default',
    elevation = 1,
    transition = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
