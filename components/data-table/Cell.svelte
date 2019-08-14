{#if header}
  <th
    use:useActions={use}
    use:forwardEvents
    class="mdc-data-table__header-cell {className}"
    {...roleProp}
    {...scopeProp}
    {...exclude($$props, ['use', 'class', 'numeric'])}
  ><slot></slot></th>
{:else}
  <td
    use:useActions={use}
    use:forwardEvents
    class="mdc-data-table__cell {className}"
    class:mdc-data-table__cell--numeric={numeric}
    {...roleProp}
    {...scopeProp}
    {...exclude($$props, ['use', 'class', 'numeric'])}
  ><slot></slot></td>
{/if}

<script>
  import {getContext} from 'svelte';
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

  $: roleProp = role ? {role} : {};
  $: scopeProp = scope ? {scope} : {};
</script>