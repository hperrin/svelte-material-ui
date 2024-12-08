<svelte:options runes />

{#if header}
  <th
    bind:this={element}
    use:useActions={use}
    class={classMap({
      [className]: true,
      'mdc-data-table__header-cell': true,
      'mdc-data-table__header-cell--numeric': numeric,
      'mdc-data-table__header-cell--checkbox': checkbox,
      'mdc-data-table__header-cell--with-sort': sortable,
      'mdc-data-table__header-cell--sorted': sortable && $sort === columnId,
      ...internalClasses,
    })}
    role="columnheader"
    scope="col"
    data-column-id={columnId}
    aria-sort={sortable
      ? $sort === columnId
        ? $sortDirection
        : 'none'
      : undefined}
    {...internalAttrs}
    {...restProps}
    onchange={(e) => {
      if (checkbox) {
        notifyHeaderChange(e);
      }
      restProps.onchange?.(e);
    }}
    >{#if sortable}
      <div class="mdc-data-table__header-cell-wrapper">
        {@render children?.()}
        <div
          class="mdc-data-table__sort-status-label"
          aria-hidden="true"
          id="{columnId}-status-label"
        >
          {$sort === columnId
            ? $sortDirection === 'ascending'
              ? sortAscendingAriaLabel
              : sortDescendingAriaLabel
            : ''}
        </div>
      </div>
    {:else}{@render children?.()}{/if}</th
  >
{:else}
  <td
    bind:this={element}
    use:useActions={use}
    class={classMap({
      [className]: true,
      'mdc-data-table__cell': true,
      'mdc-data-table__cell--numeric': numeric,
      'mdc-data-table__cell--checkbox': checkbox,
      ...internalClasses,
    })}
    {...internalAttrs}
    {...restProps}
    onchange={(e) => {
      if (checkbox) {
        notifyBodyChange(e);
      }
      restProps.onchange?.(e);
    }}>{@render children?.()}</td
  >
{/if}

<script module lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import type { SortValue } from '@material/data-table';
  import type { Snippet } from 'svelte';
  import { onMount, getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';

  import type { SMUIDataTableCellAccessor } from './Cell.types.js';

  let header = getContext<boolean>('SMUI:data-table:row:header');

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
     * Whether to apply numeric column styling.
     */
    numeric?: boolean;
    /**
     * Whether this cell contains the checkbox to select.
     */
    checkbox?: boolean;
    /**
     * The column ID for the column this cell is a header for.
     *
     * You only need this on sortable columns and you only need to put it on the
     * cell in the header.
     */
    columnId?: string;
    /**
     * Whether sorting is enabled on the column this cell is a header for.
     *
     * This will default to true if the data table is sortable.
     */
    sortable?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    numeric = false,
    checkbox = false,
    columnId = header
      ? 'SMUI-data-table-column-' + counter++
      : 'SMUI-data-table-unused',
    sortable = getContext<boolean>('SMUI:data-table:sortable'),
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'th', keyof OwnProps> &
    SmuiAttrs<'td', keyof OwnProps> = $props();

  let element: HTMLTableCellElement;
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let sort = getContext<Writable<string | null>>('SMUI:data-table:sort');
  let sortDirection = getContext<Writable<SortValue>>(
    'SMUI:data-table:sortDirection',
  );
  let sortAscendingAriaLabel = getContext<string>(
    'SMUI:data-table:sortAscendingAriaLabel',
  );
  let sortDescendingAriaLabel = getContext<string>(
    'SMUI:data-table:sortDescendingAriaLabel',
  );

  if (sortable) {
    setContext('SMUI:label:context', 'data-table:sortable-header-cell');
    setContext('SMUI:icon-button:context', 'data-table:sortable-header-cell');
    setContext('SMUI:icon-button:aria-describedby', columnId + '-status-label');
  }

  const SMUIDataTableCellMount = getContext<
    ((accessor: SMUIDataTableCellAccessor) => void) | undefined
  >('SMUI:data-table:cell:mount');
  const SMUIDataTableCellUnmount = getContext<
    ((accessor: SMUIDataTableCellAccessor) => void) | undefined
  >('SMUI:data-table:cell:unmount');

  onMount(() => {
    const accessor: SMUIDataTableCellAccessor = header
      ? {
          _smui_data_table_header_cell_accessor: true,
          get element() {
            return getElement();
          },
          get columnId() {
            return columnId;
          },
          addClass,
          removeClass,
          getAttr,
          addAttr,
        }
      : {
          _smui_data_table_header_cell_accessor: false,
          get element() {
            return getElement();
          },
          get columnId() {
            return undefined;
          },
          addClass,
          removeClass,
          getAttr,
          addAttr,
        };

    SMUIDataTableCellMount && SMUIDataTableCellMount(accessor);

    return () => {
      SMUIDataTableCellUnmount && SMUIDataTableCellUnmount(accessor);
    };
  });

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

  function getAttr(name: string) {
    return name in internalAttrs
      ? (internalAttrs[name] ?? null)
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function notifyHeaderChange(event: Event) {
    dispatch(getElement(), 'SMUIDataTableHeaderCheckboxChange', event);
  }

  function notifyBodyChange(event: Event) {
    dispatch(getElement(), 'SMUIDataTableBodyCheckboxChange', event);
  }

  export function getElement() {
    return element;
  }
</script>
