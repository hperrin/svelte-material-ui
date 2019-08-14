<tr
  use:useActions={use}
  use:forwardEvents
  class:mdc-data-table__header-row={header}
  class:mdc-data-table__row={!header}
  {...exclude($$props, ['use'])}
><slot></slot></tr>

<script>
  import {getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];

  let header = getContext('SMUI:data-table:row:header');
</script>