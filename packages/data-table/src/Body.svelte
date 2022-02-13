<tbody
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-data-table__content': true,
  })}
  on:SMUIDataTableRow:mount={handleRowMount}
  on:SMUIDataTableRow:unmount={handleRowUnmount}
  {...$$restProps}><slot /></tbody
>

<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  import type { SMUIDataTableRowAccessor } from './Row.types.js';
  import type { SMUIDataTableBodyAccessor } from './Body.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLTableSectionElement;
  let rows: SMUIDataTableRowAccessor[] = [];
  const rowAccessorMap = new WeakMap<
    HTMLTableRowElement,
    SMUIDataTableRowAccessor
  >();

  setContext('SMUI:data-table:row:header', false);

  onMount(() => {
    const accessor: SMUIDataTableBodyAccessor = {
      get rows() {
        return rows;
      },
      get orderedRows() {
        return getOrderedRows();
      },
    };

    dispatch(getElement(), 'SMUIDataTableBody:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUIDataTableBody:unmount', accessor);
    };
  });

  function handleRowMount(event: CustomEvent<SMUIDataTableRowAccessor>) {
    rows.push(event.detail);
    rowAccessorMap.set(event.detail.element, event.detail);
    event.stopPropagation();
  }

  function handleRowUnmount(event: CustomEvent<SMUIDataTableRowAccessor>) {
    const idx = rows.indexOf(event.detail);
    if (idx !== -1) {
      rows.splice(idx, 1);
      rows = rows;
    }
    rowAccessorMap.delete(event.detail.element);
    event.stopPropagation();
  }

  function getOrderedRows() {
    return [
      ...getElement().querySelectorAll<HTMLTableRowElement>(
        '.mdc-data-table__row'
      ),
    ]
      .map((element) => rowAccessorMap.get(element))
      .filter(
        (accessor) => accessor && accessor._smui_data_table_row_accessor
      ) as SMUIDataTableRowAccessor[];
  }

  export function getElement() {
    return element;
  }
</script>
