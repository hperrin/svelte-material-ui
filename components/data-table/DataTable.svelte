<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-data-table {className}"
  {...exclude($$props, ['use', 'class', 'table$'])}
>
  <table
    use:useActions={table$use}
    class="mdc-data-table__table {table$class}"
    {...prefixFilter($$props, 'table$')}
  >
    <slot></slot>
  </table>
</div>

<script>
  import {MDCDataTable} from '@material/data-table';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {prefixFilter} from '../prefixFilter.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCDataTable:changed', 'MDCDataTable:selectedAll', 'MDCDataTable:unselectedAll']);

  export let use = [];
  let className = '';
  export {className as class};
  export let table$use = [];
  export let table$class = '';

  let element;
  let dataTable;

  onMount(async () => {
    dataTable = new MDCDataTable(element);
  });

  onDestroy(() => {
    dataTable.destroy();
  });

  export function layout(...args) {
    return dataTable.layout(...args);
  }

  export function getRows(...args) {
    return dataTable.getRows(...args);
  }

  export function getSelectedRowIds(...args) {
    return dataTable.getSelectedRowIds(...args);
  }

  export function setSelectedRowIds(...args) {
    return dataTable.setSelectedRowIds(...args);
  }
</script>