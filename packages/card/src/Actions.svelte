<svelte:options runes={false} />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-card__actions': true,
    'mdc-card__actions--full-bleed': fullBleed,
  })}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { setContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    fullBleed?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fullBleed = false;

  let element: HTMLDivElement;

  setContext('SMUI:button:context', 'card:action');
  setContext('SMUI:icon-button:context', 'card:action');

  export function getElement() {
    return element;
  }
</script>
