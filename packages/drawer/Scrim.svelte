<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-drawer-scrim': true,
    'smui-drawer-scrim__absolute': !fixed,
  })}
  on:click={(event) => dispatch(element, 'SMUI:drawer:scrim:click', event)}
  {...$$restProps}
>
  <slot />
</svelte:component>

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal.js';
  import Div from '@smui/common/Div.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let fixed = true;

  let element;

  export let component = Div;

  export function getElement() {
    return element.getElement();
  }
</script>
