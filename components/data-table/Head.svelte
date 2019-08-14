<thead
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['use'])}
><slot></slot></thead>

<script>
  import {setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  setContext('SMUI:data-table:row:header', true);
</script>