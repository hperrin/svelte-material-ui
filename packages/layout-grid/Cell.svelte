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

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let align = null;
  export let order = null;
  export let span = null;
  export let spanDevices = {};

  let element;

  export function getElement() {
    return element;
  }
</script>
