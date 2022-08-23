<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-drawer-scrim': true,
    'smui-drawer-scrim__absolute': !fixed,
  })}
  on:click={(event) => dispatch(getElement(), 'SMUIDrawerScrim:click', event)}
  {...$$restProps}
>
  <slot />
</svelte:component>

<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal';
  import type { SmuiComponentDev } from '@smui/common';
  import { Element } from '@smui/common';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fixed = true;

  let element: SmuiComponentDev;

  export let component: ComponentType<SmuiComponentDev> = Element;
  export let tag = component === Element ? 'div' : null;

  export function getElement(): Element {
    return element.getElement();
  }
</script>
