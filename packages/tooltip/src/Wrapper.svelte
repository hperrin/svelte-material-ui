<svelte:options runes />

{#if rich}
  <div
    bind:this={element}
    use:useActions={use}
    class={classMap({
      'mdc-tooltip-wrapper--rich': true,
      [className]: true,
    })}
    {...restProps}
  >
    {@render children?.()}
  </div>
{:else}
  {@render children?.()}
{/if}

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
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
     * Whether this wrapper is for a rich tooltip.
     *
     * Rich tooltips can have more than just text content. They are also
     * automatically wrapped in a div.
     */
    rich?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    rich = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement | undefined;
  const anchor = writable<HTMLElement | undefined>(undefined);
  const tooltip = writable<HTMLDivElement | undefined>(undefined);

  setContext('SMUI:tooltip:wrapper:anchor', anchor);
  setContext('SMUI:tooltip:wrapper:tooltip', tooltip);
  setContext('SMUI:tooltip:rich', rich);

  $effect(() => {
    if ($tooltip && !$anchor) {
      $anchor = $tooltip.previousElementSibling as HTMLElement;
    }
  });

  export function getElement() {
    return element;
  }
</script>
