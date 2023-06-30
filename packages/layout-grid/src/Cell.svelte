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
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    align?: 'top' | 'middle' | 'bottom' | undefined;
    order?: number | undefined;
    span?: number | undefined;
    spanDevices?: {
      desktop?: number;
      tablet?: number;
      phone?: number;
    };
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
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
