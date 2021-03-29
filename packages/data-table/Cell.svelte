{#if header}
  <th
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-data-table__header-cell
      {className}
      {checkbox
      ? 'mdc-data-table__header-cell--checkbox'
      : ''}
    "
    {...roleProp}
    {...scopeProp}
    {...props}><slot /></th
  >
{:else}
  <td
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-data-table__cell
      {className}
      {numeric
      ? 'mdc-data-table__cell--numeric'
      : ''}
      {checkbox ? 'mdc-data-table__cell--checkbox' : ''}
    "
    {...roleProp}
    {...scopeProp}
    {...props}><slot /></td
  >
{/if}

<script>
  import { getContext, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  let header = getContext('SMUI:data-table:row:header');

  export let use = [];
  let className = '';
  export { className as class };
  export let role = header ? 'columnheader' : undefined;
  export let scope = header ? 'col' : undefined;
  export let numeric = false;
  export let checkbox = false;

  $: props = exclude($$props, ['use', 'class', 'numeric', 'checkbox']);

  $: roleProp = role ? { role } : {};
  $: scopeProp = scope ? { scope } : {};
</script>
