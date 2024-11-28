<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'smui-button__group': true,
    'smui-button__group--raised': variant === 'raised',
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
     * The styling variant of the button group.
     */
    variant?: 'text' | 'raised' | 'unelevated' | 'outlined';

    children?: Snippet;
  };

  // Remember to update $$Props if you add/remove/rename props.
  let {
    use = [],
    class: className = '',
    variant = 'text',
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
