<label
  use:useActions={use}
  use:forwardEvents
  class="mdc-list-item__text {className}"
  {...inputProps && inputProps.id ? { for: inputProps && inputProps.id } : {}}
  {...exclude($$props, ['use', 'class'])}><slot /></label
>

<script>
  import { getContext, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };

  let inputProps = getContext('SMUI:generic:input:props') || {};
</script>
