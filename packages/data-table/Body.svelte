<tbody
  use:useActions={use}
  use:forwardEvents
  class="mdc-data-table__content {className}"
  {...exclude($$props, ['use', 'class'])}><slot /></tbody
>

<script>
  import { setContext, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };

  setContext('SMUI:data-table:row:header', false);
</script>
