
<img
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  {alt}
  {...exclude($$props, ['element', 'use', 'forwardEvents', 'alt'])}
/>

<script>
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents.js';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  export let alt = '';
  export let element = null;
  export let use = [];
  let forwardEventsAdditional = [];
  export {forwardEventsAdditional as forwardEvents};

  const forwardEvents = forwardEventsBuilder(get_current_component(), forwardEventsAdditional);
</script>
