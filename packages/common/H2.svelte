<h2
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['use'])}
><slot></slot></h2>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents.js';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
</script>