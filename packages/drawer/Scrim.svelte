<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-drawer-scrim': true,
    'smui-drawer-scrim__absolute': !fixed,
  })}
  on:click={(event) => dispatch(element, 'SMUIDrawerScrim:click', event)}
  {...$$restProps}
>
  <slot />
</svelte:component>

<script lang="ts">
  import type { SMUIComponent } from '@smui/common';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
    ActionArray,
  } from '@smui/common/internal';
  import { Div } from '@smui/common/elements';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fixed = true;

  let element: SMUIComponent;

  export let component: typeof SMUIComponent = Div;

  export function getElement() {
    return element.getElement();
  }
</script>
