<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-data-table': true,
    'mdc-data-table--sticky-header': stickyHeader,
    ...internalClasses,
  })}
  {...exclude(restProps, ['container$', 'table$'])}
  onSMUIDataTableHeaderCheckboxChange={(e) => {
    if (instance) {
      instance.handleHeaderRowCheckboxChange();
    }
    restProps.onSMUIDataTableHeaderCheckboxChange?.(e);
  }}
  onSMUIDataTableHeaderClick={(e) => {
    handleHeaderRowClick(e);
    restProps.onSMUIDataTableHeaderClick?.(e);
  }}
  onSMUIDataTableRowClick={(e) => {
    handleRowClick(e);
    restProps.onSMUIDataTableRowClick?.(e);
  }}
  onSMUIDataTableBodyCheckboxChange={(e) => {
    handleBodyCheckboxChange(e);
    restProps.onSMUIDataTableBodyCheckboxChange?.(e);
  }}
>
  <div
    bind:this={container}
    use:useActions={container$use}
    class={classMap({
      [container$class]: true,
      'mdc-data-table__table-container': true,
    })}
    {...prefixFilter(restProps, 'container$')}
  >
    <table
      use:useActions={table$use}
      class={classMap({
        [table$class]: true,
        'mdc-data-table__table': true,
      })}
      {...prefixFilter(restProps, 'table$')}
    >
      {@render children?.()}
    </table>
  </div>

  {#if progress}
    <div
      class="mdc-data-table__progress-indicator"
      style={Object.entries(progressIndicatorStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      <div class="mdc-data-table__scrim"></div>
      {@render progress?.()}
    </div>
  {/if}

  {@render paginate?.()}
</div>

<script lang="ts">
  import type {
    ProgressIndicatorStyles,
    SortValue,
  } from '@material/data-table';
  import { MDCDataTableFoundation } from '@material/data-table';
  import { ponyfill } from '@material/dom';
  import type { Snippet } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type {
    AddLayoutListener,
    RemoveLayoutListener,
    SmuiAttrs,
    SmuiElementPropMap,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
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
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * Whether to use sticky header styles.
     */
    stickyHeader?: boolean;
    /**
     * Whether the data table is sortable.
     *
     * (You handle sorting on your own with a handler on the SMUIDataTableSorted
     * event, but the interactions are available to the user.)
     */
    sortable?: boolean;
    /**
     * The columnId of the currently sorted column.
     */
    sort?: string | null;
    /**
     * The direction the rows are sorted in.
     */
    sortDirection?: Lowercase<keyof typeof SortValue>;
    /**
     * An ARIA label to indicate sorted status when sort is ascending.
     */
    sortAscendingAriaLabel?: string;
    /**
     * An ARIA label to indicate sorted status when sort is descending.
     */
    sortDescendingAriaLabel?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    container$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    container$class?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    table$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    table$class?: string;

    children?: Snippet;
    /**
     * A spot for the progress indicator.
     */
    progress?: Snippet;
    /**
     * A spot for the pagination components.
     */
    paginate?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    stickyHeader = false,
    sortable = false,
    sort = $bindable(null),
    sortDirection = $bindable('ascending'),
    sortAscendingAriaLabel = 'sorted, ascending',
    sortDescendingAriaLabel = 'sorted, descending',
    container$use = [],
    container$class = '',
    table$use = [],
    table$class = '',
    children,
    progress,
    paginate,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `container\$${k}`]?: SmuiElementPropMap['div'][k];
    } & {
      [k in keyof SmuiElementPropMap['table'] as `table\$${k}`]?: SmuiElementPropMap['table'][k];
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCDataTableFoundation | undefined = $state();
  let container: HTMLDivElement;
  let header: SMUIDataTableHeadAccessor | undefined = $state();
  let body: SMUIDataTableBodyAccessor | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let progressIndicatorStyles: ProgressIndicatorStyles = $state({
    height: 'auto',
    top: 'initial',
  });
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;
  let postMount = false;
  let progressClosed = writable(false);
  let sortStore = writable(sort);
  $effect(() => {
    $sortStore = sort;
  });
  let sortDirectionStore = writable(sortDirection);
  $effect(() => {
    $sortDirectionStore = sortDirection;
  });

  setContext('SMUI:checkbox:context', 'data-table');
  setContext('SMUI:linear-progress:context', 'data-table');
  setContext('SMUI:linear-progress:closed', progressClosed);
  setContext('SMUI:data-table:sortable', sortable);
  setContext('SMUI:data-table:sort', sortStore);
  setContext('SMUI:data-table:sortDirection', sortDirectionStore);
  setContext('SMUI:data-table:sortAscendingAriaLabel', sortAscendingAriaLabel);
  setContext(
    'SMUI:data-table:sortDescendingAriaLabel',
    sortDescendingAriaLabel,
  );

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  let previousProgressClosed: boolean | undefined = undefined;
  $effect(() => {
    if (!!progress && instance && previousProgressClosed !== $progressClosed) {
      previousProgressClosed = $progressClosed;
      if ($progressClosed) {
        instance.hideProgress();
      } else {
        instance.showProgress();
      }
    }
  });

  setContext('SMUI:checkbox:mount', () => {
    if (instance && postMount) {
      instance.layout();
    }
  });
  setContext(
    'SMUI:data-table:header:mount',
    (accessor: SMUIDataTableHeadAccessor) => {
      header = accessor;
    },
  );
  setContext('SMUI:data-table:header:unmount', () => {
    header = undefined;
  });
  setContext(
    'SMUI:data-table:body:mount',
    (accessor: SMUIDataTableBodyAccessor) => {
      body = accessor;
    },
  );
  setContext('SMUI:data-table:body:unmount', () => {
    body = undefined;
  });

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
        dispatch(getElement(), 'SMUIDataTableSorted', data);
      },
      getTableContainerHeight: () => container.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const tableHeader = getElement().querySelector(
          '.mdc-data-table__header-row',
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
              closest(el, '.mdc-data-table__row') as HTMLTableRowElement,
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
          dispatch(getElement(), 'SMUIDataTableSelectionChanged', {
            row: row.element,
            rowId: row.rowId,
            rowIndex: data.rowIndex,
            selected: data.selected,
          });
        }
      },
      notifySelectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(getElement(), 'SMUIDataTableSelectedAll');
      },
      notifyUnselectedAll: () => {
        setHeaderRowCheckboxIndeterminate(false);
        dispatch(getElement(), 'SMUIDataTableUnselectedAll');
      },
      notifyRowClick: (detail) =>
        dispatch(getElement(), 'SMUIDataTableClickRow', detail),
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
      instance?.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

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
      '.mdc-data-table__header-cell--with-sort',
    ) as HTMLTableCellElement;

    if (headerCell) {
      handleSortAction(headerCell);
    }
  }

  function handleRowClick(
    event: CustomEvent<{ rowId: string; target: HTMLElement }>,
  ) {
    if (!instance || !event.detail.target) {
      return;
    }

    const row = closest(
      event.detail.target as Element,
      '.mdc-data-table__row',
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

    instance?.handleSortAction({ columnId, columnIndex, headerCell });
  }

  export function layout() {
    return instance?.layout();
  }

  export function getElement() {
    return element;
  }
</script>
