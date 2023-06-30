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
  on:SMUICheckbox:mount={() => instance && postMount && instance.layout()}
  on:SMUIDataTableHeader:mount={handleHeaderMount}
  on:SMUIDataTableHeader:unmount={() => (header = undefined)}
  on:SMUIDataTableBody:mount={handleBodyMount}
  on:SMUIDataTableBody:unmount={() => (body = undefined)}
  on:SMUIDataTableHeaderCheckbox:change={() =>
    instance && instance.handleHeaderRowCheckboxChange()}
  on:SMUIDataTableHeader:click={handleHeaderRowClick}
  on:SMUIDataTableRow:click={handleRowClick}
  on:SMUIDataTableBodyCheckbox:change={handleBodyCheckboxChange}
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

  {#if $$slots.progress}
    <div
      class="mdc-data-table__progress-indicator"
      style={Object.entries(progressIndicatorStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      <div class="mdc-data-table__scrim" />
      <slot name="progress" />
    </div>
  {/if}

  <slot name="paginate" />
</div>

<script lang="ts">
  import type {
    ProgressIndicatorStyles,
    SortValue,
  } from '@material/data-table';
  import { MDCDataTableFoundation } from '@material/data-table';
  import { ponyfill } from '@material/dom';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  import type { SMUIDataTableHeadAccessor } from './Head.types.js';
  import type { SMUIDataTableBodyAccessor } from './Body.types.js';

  const { closest } = ponyfill;

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    stickyHeader?: boolean;
    sortable?: boolean;
    sort?: string | null;
    sortDirection?: Lowercase<keyof typeof SortValue>;
    sortAscendingAriaLabel?: string;
    sortDescendingAriaLabel?: string;
    container$use?: ActionArray;
    container$class?: string;
    table$use?: ActionArray;
    table$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `container\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['table'] as `table\$${k}`]?: SmuiElementPropMap['table'][k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let stickyHeader = false;
  export let sortable = false;
  export let sort: string | null = null;
  export let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
  export let sortAscendingAriaLabel = 'sorted, ascending';
  export let sortDescendingAriaLabel = 'sorted, descending';
  export let container$use: ActionArray = [];
  export let container$class = '';
  export let table$use: ActionArray = [];
  export let table$class = '';

  let element: HTMLDivElement;
  let instance: MDCDataTableFoundation;
  let container: HTMLDivElement;
  let header: SMUIDataTableHeadAccessor | undefined = undefined;
  let body: SMUIDataTableBodyAccessor | undefined = undefined;
  let internalClasses: { [k: string]: boolean } = {};
  let progressIndicatorStyles: ProgressIndicatorStyles = {
    height: 'auto',
    top: 'initial',
  };
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener'
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let postMount = false;
  let progressClosed = writable(false);
  let sortStore = writable(sort);
  let sortDirectionStore = writable(sortDirection);

  setContext('SMUI:checkbox:context', 'data-table');
  setContext('SMUI:linear-progress:context', 'data-table');
  setContext('SMUI:linear-progress:closed', progressClosed);
  setContext('SMUI:data-table:sortable', sortable);
  setContext('SMUI:data-table:sort', sortStore);
  setContext('SMUI:data-table:sortDirection', sortDirectionStore);
  setContext('SMUI:data-table:sortAscendingAriaLabel', sortAscendingAriaLabel);
  setContext(
    'SMUI:data-table:sortDescendingAriaLabel',
    sortDescendingAriaLabel
  );

  $: $sortStore = sort;
  $: $sortDirectionStore = sortDirection;

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  let previousProgressClosed: boolean | undefined = undefined;
  $: if (
    $$slots.progress &&
    instance &&
    previousProgressClosed !== $progressClosed
  ) {
    previousProgressClosed = $progressClosed;
    if ($progressClosed) {
      instance.hideProgress();
    } else {
      instance.showProgress();
    }
  }

  onMount(() => {
    instance = new MDCDataTableFoundation({
      addClass,
      removeClass,
      getHeaderCellElements: () =>
        header?.cells.map((accessor) => accessor.element) ?? [],
      getHeaderCellCount: () => header?.cells.length ?? 0,
      getAttributeByHeaderCellIndex: (index, name) => {
        return header?.orderedCells[index].getAttr(name) ?? null;
      },
      setAttributeByHeaderCellIndex: (index, name, value) => {
        header?.orderedCells[index].addAttr(name, value);
      },
      setClassNameByHeaderCellIndex: (index, className) => {
        header?.orderedCells[index].addClass(className);
      },
      removeClassNameByHeaderCellIndex: (index, className) => {
        header?.orderedCells[index].removeClass(className);
      },
      notifySortAction: (data) => {
        sort = data.columnId;
        sortDirection = data.sortValue;
        dispatch(getElement(), 'SMUIDataTable:sorted', data, undefined, true);
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
      setProgressIndicatorStyles: (styles) => {
        progressIndicatorStyles = styles;
      },
      addClassAtRowIndex: (rowIndex, className) => {
        body?.orderedRows[rowIndex].addClass(className);
      },
      getRowCount: () => body?.rows.length ?? 0,
      getRowElements: () =>
        body?.rows.map((accessor) => accessor.element) ?? [],
      getRowIdAtIndex: (rowIndex) => body?.orderedRows[rowIndex].rowId ?? null,
      getRowIndexByChildElement: (el) => {
        return (
          body?.orderedRows
            .map((accessor) => accessor.element)
            .indexOf(
              closest(el, '.mdc-data-table__row') as HTMLTableRowElement
            ) ?? -1
        );
      },
      getSelectedRowCount: () =>
        body?.rows.filter((accessor) => accessor.selected).length ?? 0,
      isCheckboxAtRowIndexChecked: (rowIndex) => {
        const checkbox = body?.orderedRows[rowIndex].checkbox;
        if (checkbox) {
          return checkbox.checked;
        }
        return false;
      },
      isHeaderRowCheckboxChecked: () => {
        const checkbox = header?.checkbox;
        if (checkbox) {
          return checkbox.checked;
        }
        return false;
      },
      isRowsSelectable: () =>
        !!getElement().querySelector('.mdc-data-table__row-checkbox') ||
        !!getElement().querySelector('.mdc-data-table__header-row-checkbox'),
      notifyRowSelectionChanged: (data) => {
        const row = body?.orderedRows[data.rowIndex];
        if (row) {
          dispatch(
            getElement(),
            'SMUIDataTable:rowSelectionChanged',
            {
              row: row.element,
              rowId: row.rowId,
              rowIndex: data.rowIndex,
              selected: data.selected,
            },
            undefined,
            true
          );
        }
      },
      notifySelectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(
          getElement(),
          'SMUIDataTable:selectedAll',
          undefined,
          undefined,
          true
        );
      },
      notifyUnselectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(
          getElement(),
          'SMUIDataTable:unselectedAll',
          undefined,
          undefined,
          true
        );
      },
      notifyRowClick: (detail) => {
        dispatch(
          getElement(),
          'SMUIDataTable:rowClick',
          detail,
          undefined,
          true
        );
      },
      registerHeaderRowCheckbox: () => {
        // Handled automatically.
      },
      registerRowCheckboxes: () => {
        // Handled automatically.
      },
      removeClassAtRowIndex: (rowIndex, className) => {
        body?.orderedRows[rowIndex].removeClass(className);
      },
      setAttributeAtRowIndex: (rowIndex, name, value) => {
        body?.orderedRows[rowIndex].addAttr(name, value);
      },
      setHeaderRowCheckboxChecked: (checked) => {
        const checkbox = header?.checkbox;
        if (checkbox) {
          checkbox.checked = checked;
        }
      },
      setHeaderRowCheckboxIndeterminate,
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
        const checkbox = body?.orderedRows[rowIndex].checkbox;
        if (checkbox) {
          checkbox.checked = checked;
        }
      },
      setSortStatusLabelByHeaderCellIndex: (_columnIndex, _sortValue) => {
        // Handled automatically.
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

  function handleHeaderMount(event: CustomEvent<SMUIDataTableHeadAccessor>) {
    header = event.detail;
  }

  function handleBodyMount(event: CustomEvent<SMUIDataTableBodyAccessor>) {
    body = event.detail;
  }

  function handleBodyCheckboxChange(event: Event) {
    if (instance) {
      instance.handleRowCheckboxChange(event);
    }
  }

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function setHeaderRowCheckboxIndeterminate(indeterminate: boolean) {
    const checkbox = header?.checkbox;
    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  }

  function handleHeaderRowClick(event: CustomEvent<MouseEvent>) {
    if (!instance || !event.detail.target) {
      return;
    }

    const headerCell = closest(
      event.detail.target as Element,
      '.mdc-data-table__header-cell--with-sort'
    ) as HTMLTableCellElement;

    if (headerCell) {
      handleSortAction(headerCell);
    }
  }

  function handleRowClick(
    event: CustomEvent<{ rowId: string; target: HTMLElement }>
  ) {
    if (!instance || !event.detail.target) {
      return;
    }

    const row = closest(
      event.detail.target as Element,
      '.mdc-data-table__row'
    ) as HTMLTableRowElement;

    if (row && instance) {
      instance.handleRowClick({ rowId: event.detail.rowId, row });
    }
  }

  function handleSortAction(headerCell: HTMLTableCellElement) {
    const orderedCells = header?.orderedCells ?? [];

    const columnIndex = orderedCells
      .map((accessor) => accessor.element)
      .indexOf(headerCell);
    if (columnIndex === -1) {
      return;
    }
    const columnId = orderedCells[columnIndex].columnId ?? null;

    instance.handleSortAction({ columnId, columnIndex, headerCell });
  }

  export function layout() {
    return instance.layout();
  }

  export function getElement() {
    return element;
  }
</script>
