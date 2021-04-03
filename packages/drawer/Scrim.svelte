<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class="mdc-drawer-scrim {className} {fixed
    ? ''
    : 'smui-drawer-scrim__absolute'}"
  on:click={(event) => dispatch(element, 'SMUI:drawer:scrim:click', event)}
  {...exclude($$props, ['use', 'class', 'component'])}
>
  <slot />
</svelte:component>

<script>
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    dispatch,
  } from '@smui/common/internal.js';
  import Div from '@smui/common/Div.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:drawer:scrim:click',
  ]);

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
