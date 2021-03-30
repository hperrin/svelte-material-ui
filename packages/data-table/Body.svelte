<tbody
  use:useActions={use}
  use:forwardEvents
  class="mdc-data-table__content {className}"
  {...exclude($$props, ['use', 'class'])}><slot /></tbody
>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  setContext('SMUI:data-table:row:header', false);
</script>
