{#if header}
  <th
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-data-table__header-cell': true,
      'mdc-data-table__header-cell--numeric': numeric,
      'mdc-data-table__header-cell--checkbox': checkbox,
      'mdc-data-table__header-cell--with-sort': sortable,
      'mdc-data-table__header-cell--sorted': sortable && $sort === columnId,
      ...internalClasses,
    })}
    on:change={(event) => checkbox && notifyHeaderChange(event)}
    role="columnheader"
    scope="col"
    data-column-id={columnId}
    aria-sort={sortable
      ? $sort === columnId
        ? $sortDirection
        : 'none'
      : undefined}
    {...internalAttrs}
    {...$$restProps}
    >{#if sortable}
      <div class="mdc-data-table__header-cell-wrapper">
        <slot />
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
    {:else}<slot />{/if}</th
  >
{:else}
  <td
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class={classMap({
      [className]: true,
      'mdc-data-table__cell': true,
      'mdc-data-table__cell--numeric': numeric,
      'mdc-data-table__cell--checkbox': checkbox,
      ...internalClasses,
    })}
    on:change={(event) => checkbox && notifyBodyChange(event)}
    {...internalAttrs}
    {...$$restProps}><slot /></td
  >
{/if}

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import type { SortValue } from '@material/data-table';
  import { onMount, getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  import type { SMUIDataTableCellAccessor } from './Cell.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    numeric?: boolean;
    checkbox?: boolean;
    columnId?: string;
    sortable?: boolean;
  };
  type $$Props = SmuiAttrs<'th', keyof OwnProps> &
    SmuiAttrs<'td', keyof OwnProps> &
    OwnProps;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let header = getContext<boolean>('SMUI:data-table:row:header');

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let numeric = false;
  export let checkbox = false;
  export let columnId = header
    ? 'SMUI-data-table-column-' + counter++
    : 'SMUI-data-table-unused';
  export let sortable = getContext<boolean>('SMUI:data-table:sortable');

  let element: HTMLTableCellElement;
  let internalClasses: { [k: string]: boolean } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let sort = getContext<Writable<string | null>>('SMUI:data-table:sort');
  let sortDirection = getContext<Writable<SortValue>>(
    'SMUI:data-table:sortDirection'
  );
  let sortAscendingAriaLabel = getContext<string>(
    'SMUI:data-table:sortAscendingAriaLabel'
  );
  let sortDescendingAriaLabel = getContext<string>(
    'SMUI:data-table:sortDescendingAriaLabel'
  );

  if (sortable) {
    setContext('SMUI:label:context', 'data-table:sortable-header-cell');
    setContext('SMUI:icon-button:context', 'data-table:sortable-header-cell');
    setContext('SMUI:icon-button:aria-describedby', columnId + '-status-label');
  }

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

    dispatch(getElement(), 'SMUIDataTableCell:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUIDataTableCell:unmount', accessor);
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
      ? internalAttrs[name] ?? null
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function notifyHeaderChange(event: Event) {
    dispatch(getElement(), 'SMUIDataTableHeaderCheckbox:change', event);
  }

  function notifyBodyChange(event: Event) {
    dispatch(getElement(), 'SMUIDataTableBodyCheckbox:change', event);
  }

  export function getElement() {
    return element;
  }
</script>
