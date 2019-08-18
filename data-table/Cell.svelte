{#if header}
  <th
    use:useActions={use}
    use:forwardEvents
    class="mdc-data-table__header-cell {className}"
    class:mdc-data-table__header-cell--checkbox={checkbox}
    {...roleProp}
    {...scopeProp}
    {...exclude($$props, ['use', 'class', 'numeric', 'checkbox'])}
  ><slot></slot></th>
{:else}
  <td
    use:useActions={use}
    use:forwardEvents
    class="mdc-data-table__cell {className}"
    class:mdc-data-table__cell--numeric={numeric}
    class:mdc-data-table__cell--checkbox={checkbox}
    {...roleProp}
    {...scopeProp}
    {...exclude($$props, ['use', 'class', 'numeric', 'checkbox'])}
  ><slot></slot></td>
{/if}

<script>
  import {getContext, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  let header = getContext('SMUI:data-table:row:header');

  export let use = [];
  let className = '';
  export {className as class};
  export let role = header ? 'columnheader' : undefined;
  export let scope = header ? 'col' : undefined;
  export let numeric = false;
  export let checkbox = false;

  $: roleProp = role ? {role} : {};
  $: scopeProp = scope ? {scope} : {};
</script>