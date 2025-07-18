<svelte:options runes />

<ul
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'mdc-image-list': true,
    'mdc-image-list--masonry': masonry,
    'mdc-image-list--with-text-protection': withTextProtection,
    [className]: true,
  })}
  {...restProps}
>
  {@render children?.()}
</ul>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
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
     * Whether to use masonry layout.
     */
    masonry?: boolean;
    /**
     * Whether to move the text over the image in a caption area at the bottom.
     */
    withTextProtection?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    masonry = false,
    withTextProtection = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'ul', keyof OwnProps> = $props();

  let element: HTMLUListElement;

  setContext('SMUI:label:context', 'image-list');

  export function getElement() {
    return element;
  }
</script>
