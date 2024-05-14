<svelte:options runes={true} />

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
  <slot />
</div>

<script lang="ts">
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
  };
  let {
    use = $bindable([]),
    class: className = $bindable(''),
    variant = $bindable('raised'),
    square = $bindable(false),
    color = $bindable('default'),
    elevation = $bindable(1),
    transition = $bindable(false),
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
