<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['element', 'use', 'forwardEvents'])}
><slot></slot></span>

<script>
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents.js';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  export let element = null;
  export let use = [];
  let forwardEventsAdditional = [];
  export {forwardEventsAdditional as forwardEvents};

  const forwardEvents = forwardEventsBuilder(get_current_component(), forwardEventsAdditional);
</script>
