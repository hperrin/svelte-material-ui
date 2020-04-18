{#if header}
  <th
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-data-table__header-cell
      {className}
      {checkbox ? 'mdc-data-table__header-cell--checkbox' : ''}
    "
    {...roleProp}
    {...scopeProp}
    {...props}
  ><slot></slot></th>
{:else}
  <td
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-data-table__cell
      {className}
      {numeric ? 'mdc-data-table__cell--numeric' : ''}
      {checkbox ? 'mdc-data-table__cell--checkbox' : ''}
    "
    {...roleProp}
    {...scopeProp}
    {...props}
  ><slot></slot></td>
{/if}

<script>
  import {getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let header = getContext('SMUI:data-table:row:header');

  export let use = [];
  let className = '';
  export {className as class};
  export let role = header ? 'columnheader' : undefined;
  export let scope = header ? 'col' : undefined;
  export let numeric = false;
  export let checkbox = false;

  $: props = exclude($$props, ['use', 'class', 'numeric', 'checkbox']);

  $: roleProp = role ? {role} : {};
  $: scopeProp = scope ? {scope} : {};
</script>
