<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-data-table {className}"
  on:MDCDataTable:rowSelectionChanged={handleChange}
  on:MDCDataTable:selectedAll={handleChange}
  on:MDCDataTable:unselectedAll={handleChange}
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
  import {events} from '@material/data-table/constants';
  import {onMount, onDestroy, getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';

  if (
    events.ROW_SELECTION_CHANGED !== 'MDCDataTable:rowSelectionChanged' ||
    events.SELECTED_ALL !== 'MDCDataTable:selectedAll' ||
    events.UNSELECTED_ALL !== 'MDCDataTable:unselectedAll'
  ) {
    throw new Error('MDC API has changed!');
  }

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCDataTable:rowSelectionChanged', 'MDCDataTable:selectedAll', 'MDCDataTable:unselectedAll']);

  export let use = [];
  let className = '';
  export {className as class};
  export let table$use = [];
  export let table$class = '';

  let element;
  let dataTable;
  let changeHandlers = [];
  let checkBoxHeaderPromiseResolve;
  let checkBoxHeaderPromise = new Promise(resolve => checkBoxHeaderPromiseResolve = resolve);
  let checkBoxListPromiseResolve;
  let checkBoxListPromise = new Promise(resolve => checkBoxListPromiseResolve = resolve);
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  setContext('SMUI:generic:input:addChangeHandler', addChangeHandler);
  setContext('SMUI:checkbox:context', 'data-table');
  setContext('SMUI:checkbox:instantiate', false);
  setContext('SMUI:checkbox:getInstance', getCheckboxInstancePromise);

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(async () => {
    dataTable = new MDCDataTable(element);
    checkBoxHeaderPromiseResolve(dataTable.headerRowCheckbox_);
    checkBoxListPromiseResolve(dataTable.rowCheckboxList_);

    // Workaround for a bug in MDC DataTable where a table with no checkboxes
    // calls destroy on them anyway.
    if (!dataTable.headerRowCheckbox_) {
      dataTable.headerRowCheckbox_ = {destroy() {}};
    }
    if (!dataTable.rowCheckboxList_) {
      dataTable.rowCheckboxList_ = [];
    }
  });

  onDestroy(() => {
    dataTable && dataTable.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function getCheckboxInstancePromise(header) {
    return header ? checkBoxHeaderPromise : checkBoxListPromise;
  }

  function handleChange() {
    for (let i = 0; i < changeHandlers.length; i++) {
      changeHandlers[i]();
    }
  }

  function addChangeHandler(handler) {
    changeHandlers.push(handler);
  }

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
