<label
  use:useActions={use}
  use:forwardEvents
  class="mdc-list-item__text {className}"
  {...inputProps && inputProps.id ? { for: inputProps && inputProps.id } : {}}
  {...exclude($$props, ['use', 'class'])}><slot /></label
>

<script>
  import { getContext } from 'svelte';
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

  let inputProps = getContext('SMUI:generic:input:props') || {};
</script>
