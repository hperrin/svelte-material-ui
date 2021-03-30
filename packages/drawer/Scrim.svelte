<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class="mdc-drawer-scrim {className}"
  on:click={(event) => dispatch(element, 'SMUI:drawer:scrim:click', event)}
  {...exclude($$props, ['use', 'class', 'component'])}
>
  <slot />
</svelte:component>

<script>
  import { createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    dispatch,
  } from '@smui/common/internal.js';
  import Div from '@smui/common/Div.svelte';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher(), [
    'SMUI:drawer:scrim:click',
  ]);

  export let use = [];
  let className = '';
  export { className as class };

  export let component = Div;

  let element;
</script>
