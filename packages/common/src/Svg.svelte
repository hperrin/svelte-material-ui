<svelte:options runes />

<svg bind:this={element} use:useActions={use} {...restProps}
  >{@render children?.()}</svg
>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ActionArray } from './internal/useActions.js';
  import { useActions } from './internal/index.js';
  import type { SmuiAttrs } from './smui.types.js';

  if (console && console.warn) {
    console.warn(
      'The @smui/common Svg component is deprecated. You can use `tag="svg"` now.',
    );
  }

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;

    children?: Snippet;
  };
  let {
    use = [],
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'svg', keyof OwnProps> = $props();

  let element: SVGSVGElement;

  export function getElement() {
    return element;
  }
</script>
