<thead use:useActions={use} use:forwardEvents {...exclude($$props, ['use'])}
  ><slot /></thead
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

  setContext('SMUI:data-table:row:header', true);
</script>
