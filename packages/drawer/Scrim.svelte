<svelte:component
  this={component}
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
  import { get_current_component, SvelteComponentDev } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';
  import { Div } from '@smui/common/elements/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fixed = true;

  let element: SvelteComponentDev;

  export let component: typeof SvelteComponentDev = Div;

  export function getElement(): Element {
    return element.getElement();
  }
</script>
