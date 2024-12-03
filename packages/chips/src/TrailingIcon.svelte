<svelte:options runes />

<span bind:this={element} use:useActions={use} role="gridcell">
  <i
    class={classMap({
      [className]: true,
      'mdc-chip__icon': true,
      'mdc-chip__icon--trailing': true,
    })}
    {...restProps}>{@render children?.()}</i
  >
</span>

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

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'i', keyof OwnProps> = $props();

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
