<svelte:options runes />

<label
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-item__text': true,
  })}
  for={inputProps ? inputProps.id : undefined}
  {...restProps}>{@render children?.()}</label
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
  }: OwnProps & SmuiAttrs<'label', keyof OwnProps> = $props();

  let element: HTMLLabelElement;
  let inputProps =
    getContext<{ id?: string } | undefined>('SMUI:generic:input:props') ?? {};

  export function getElement() {
    return element;
  }
</script>
