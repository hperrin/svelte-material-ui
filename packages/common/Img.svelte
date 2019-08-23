
<img
  use:useActions={use}
  use:forwardEvents
  {alt}
  {...exclude($$props, ['use', 'alt'])}
/>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents.js';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  export let alt = '';
</script>