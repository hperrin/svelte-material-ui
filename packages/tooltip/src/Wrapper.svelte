<svelte:options runes={false} />

{#if rich}
  <div
    bind:this={element}
    use:useActions={use}
    class={classMap({
      [className]: true,
      'mdc-tooltip-wrapper--rich': true,
    })}
    {...$$restProps}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    rich?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let rich = false;

  let element: HTMLDivElement;
  const anchor = writable<HTMLElement | undefined>(undefined);
  const tooltip = writable<HTMLDivElement | undefined>(undefined);

  setContext('SMUI:tooltip:wrapper:anchor', anchor);
  setContext('SMUI:tooltip:wrapper:tooltip', tooltip);
  setContext('SMUI:tooltip:rich', rich);

  $: if ($tooltip && !$anchor) {
    $anchor = $tooltip.previousElementSibling as HTMLElement;
  }

  export function getElement() {
    return element;
  }
</script>
