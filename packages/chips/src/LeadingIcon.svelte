<svelte:options runes />

<i
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-chip__icon': true,
    'mdc-chip__icon--leading': true,
    'mdc-chip__icon--leading-hidden': $filter && $isSelected,
    ...$leadingIconClasses,
  })}
  {...restProps}>{@render children?.()}</i
>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
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

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'i', keyof OwnProps> = $props();

  const filter = getContext<SvelteStore<boolean>>('SMUI:chips:filter');
  const isSelected = getContext<SvelteStore<boolean>>(
    'SMUI:chips:chip:isSelected',
  );
  const leadingIconClasses = getContext<SvelteStore<{ [k: string]: boolean }>>(
    'SMUI:chips:chip:leadingIconClasses',
  );

  let element: HTMLElement;

  export function getElement() {
    return element;
  }
</script>
