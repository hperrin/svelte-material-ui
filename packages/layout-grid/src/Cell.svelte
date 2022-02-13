<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-layout-grid__cell': true,
    ['mdc-layout-grid__cell--align-' + align]: align != null,
    ['mdc-layout-grid__cell--order-' + order]: order != null,
    ['mdc-layout-grid__cell--span-' + span]: span != null,
    ...Object.fromEntries(
      Object.entries(spanDevices).map(([device, span]) => [
        `mdc-layout-grid__cell--span-${span}-${device}`,
        true,
      ])
    ),
  })}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let align: 'top' | 'middle' | 'bottom' | undefined = undefined;
  export let order: number | undefined = undefined;
  export let span: number | undefined = undefined;
  export let spanDevices: {
    desktop?: number;
    tablet?: number;
    phone?: number;
  } = {};

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
