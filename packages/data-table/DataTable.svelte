<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-data-table': true,
    'mdc-data-table--sticky-header': stickyHeader,
    ...internalClasses,
  })}
  on:SMUI:checkbox:mount={() => instance && postMount && instance.layout()}
  on:SMUI:data-table:header:mount={(event) => (header = event.detail)}
  on:SMUI:data-table:header:unmount={() => (header = undefined)}
  on:SMUI:data-table:body:mount={(event) => (body = event.detail)}
  on:SMUI:data-table:body:unmount={() => (body = undefined)}
  on:SMUI:data-table:header:checkbox:change={() =>
    instance && instance.handleHeaderRowCheckboxChange()}
  on:SMUI:data-table:header:click={handleHeaderRowClick}
  on:SMUI:data-table:body:checkbox:change={(event) =>
    instance && instance.handleRowCheckboxChange(event)}
  {...exclude($$restProps, ['container$', 'table$'])}
>
  <div
    bind:this={container}
    use:useActions={container$use}
    class={classMap({
      [container$class]: true,
      'mdc-data-table__table-container': true,
    })}
    {...prefixFilter($$restProps, 'container$')}
  >
    <table
      use:useActions={table$use}
      class={classMap({
        [table$class]: true,
        'mdc-data-table__table': true,
      })}
      {...prefixFilter($$restProps, 'table$')}
    >
      <slot />
    </table>
  </div>
</div>

<script>
  import { MDCDataTableFoundation } from '@material/data-table';
  import { closest } from '@material/dom/ponyfill';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let stickyHeader = false;
  export let container$use = [];
  export let container$class = '';
  export let table$use = [];
  export let table$class = '';

  let element;
  let instance;
  let container;
  let header;
  let body;
  let internalClasses = {};
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let postMount = false;

  setContext('SMUI:checkbox:context', 'data-table');

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(() => {
    instance = new MDCDataTableFoundation({
      addClass,
      removeClass,
      getHeaderCellElements: () =>
        header.cells.map((accessor) => accessor.element),
      getHeaderCellCount: () => header.cells.length,
      getAttributeByHeaderCellIndex: (index, name) => {
        return header.orderedCells[index].getAttr(name);
      },
      setAttributeByHeaderCellIndex: (index, name, value) => {
        header.orderedCells[index].addAttr(name, value);
      },
      setClassNameByHeaderCellIndex: (index, className) => {
        header.orderedCells[index].addClass(className);
      },
      removeClassNameByHeaderCellIndex: (index, className) => {
        header.orderedCells[index].removeClass(className);
      },
      notifySortAction: (data) => {
        dispatch(getElement(), 'MDCDataTable:sorted', data);
      },
      getTableContainerHeight: () => container.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const tableHeader = getElement().querySelector(
          '.mdc-data-table__header-row'
        );
        if (!tableHeader) {
          throw new Error('MDCDataTable: Table header element not found.');
        }
        return tableHeader.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (_styles) => {
        /* Not Implemented. */
      },
      addClassAtRowIndex: (rowIndex, className) => {
        body.orderedRows[rowIndex].addClass(className);
      },
      getRowCount: () => body.rows.length,
      getRowElements: () => body.rows.map((accessor) => accessor.element),
      getRowIdAtIndex: (rowIndex) => body.orderedRows[rowIndex].rowId,
      getRowIndexByChildElement: (el) => {
        return body.orderedRows
          .map((accessor) => accessor.element)
          .indexOf(closest(el, '.mdc-data-table__row'));
      },
      getSelectedRowCount: () =>
        body.rows.filter((accessor) => accessor.selected).length,
      isCheckboxAtRowIndexChecked: (rowIndex) => {
        const checkbox = body.orderedRows[rowIndex].checkbox;
        if (checkbox) {
          return checkbox.checked;
        }
        return false;
      },
      isHeaderRowCheckboxChecked: () => {
        const checkbox = header.checkbox;
        if (checkbox) {
          return checkbox.checked;
        }
        return false;
      },
      isRowsSelectable: () =>
        !!getElement().querySelector('.mdc-data-table__row-checkbox') ||
        !!getElement().querySelector('.mdc-data-table__header-row-checkbox'),
      notifyRowSelectionChanged: (data) => {
        const row = body.orderedRows[data.rowIndex];
        dispatch(getElement(), 'MDCDataTable:rowSelectionChanged', {
          row: row.element,
          rowId: row.rowId,
          rowIndex: data.rowIndex,
          selected: data.selected,
        });
      },
      notifySelectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(getElement(), 'MDCDataTable:selectedAll');
      },
      notifyUnselectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(getElement(), 'MDCDataTable:unselectedAll');
      },
      registerHeaderRowCheckbox: () => {
        // Handled automatically.
      },
      registerRowCheckboxes: () => {
        // Handled automatically.
      },
      removeClassAtRowIndex: (rowIndex, className) => {
        body.orderedRows[rowIndex].removeClass(className);
      },
      setAttributeAtRowIndex: (rowIndex, name, value) => {
        body.orderedRows[rowIndex].addAttr(name, value);
      },
      setHeaderRowCheckboxChecked: (checked) => {
        const checkbox = header.checkbox;
        if (checkbox) {
          checkbox.checked = checked;
        }
      },
      setHeaderRowCheckboxIndeterminate,
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
        const checkbox = body.orderedRows[rowIndex].checkbox;
        if (checkbox) {
          checkbox.checked = checked;
        }
      },
      setSortStatusLabelByHeaderCellIndex: (_columnIndex, _sortValue) => {
        /* Not Implemented. */
      },
    });

    instance.init();

    instance.layout();

    postMount = true;

    return () => {
      instance.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function setHeaderRowCheckboxIndeterminate(indeterminate) {
    const checkbox = header.checkbox;
    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  }

  function handleHeaderRowClick(event) {
    if (!instance) {
      return;
    }

    const headerCell = closest(
      event.target,
      '.mdc-data-table__header-cell--with-sort'
    );

    if (!headerCell) {
      return;
    }

    const orderedCells = header.orderedCells;

    const columnIndex = orderedCells
      .map((accessor) => accessor.element)
      .indexOf(headerCell);
    if (columnIndex === -1) {
      return;
    }
    const columnId = orderedCells[columnIndex].columnId;

    instance.handleSortAction({ columnId, columnIndex, headerCell });
  }

  export function layout() {
    return instance.layout();
  }

  export function getElement() {
    return element;
  }
</script>
