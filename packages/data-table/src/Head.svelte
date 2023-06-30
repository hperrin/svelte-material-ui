<thead
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  on:SMUICheckbox:mount={handleCheckboxMount}
  on:SMUICheckbox:unmount={() => (checkbox = undefined)}
  on:SMUIDataTableCell:mount={handleCellMount}
  on:SMUIDataTableCell:unmount={handleCellUnmount}
  {...$$restProps}><slot /></thead
>

<script lang="ts">
  import { onMount, setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs, SMUICheckboxInputAccessor } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  import type { SMUIDataTableCellAccessor } from './Cell.types.js';
  import type { SMUIDataTableHeadAccessor } from './Head.types.js';

  type OwnProps = {
    use?: ActionArray;
  };
  type $$Props = OwnProps & SmuiAttrs<'thead', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];

  let element: HTMLTableSectionElement;
  let checkbox: SMUICheckboxInputAccessor | undefined = undefined;
  let cells: SMUIDataTableCellAccessor[] = [];
  const cellAccessorMap = new WeakMap<
    HTMLTableCellElement,
    SMUIDataTableCellAccessor
  >();

  setContext('SMUI:data-table:row:header', true);

  onMount(() => {
    const accessor: SMUIDataTableHeadAccessor = {
      get cells() {
        return cells;
      },
      get orderedCells() {
        return getOrderedCells();
      },
      get checkbox() {
        return checkbox;
      },
    };

    dispatch(getElement(), 'SMUIDataTableHeader:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUIDataTableHeader:unmount', accessor);
    };
  });

  function handleCheckboxMount(event: CustomEvent<SMUICheckboxInputAccessor>) {
    checkbox = event.detail;
  }

  function handleCellMount(event: CustomEvent<SMUIDataTableCellAccessor>) {
    cells.push(event.detail);
    cellAccessorMap.set(event.detail.element, event.detail);
    event.stopPropagation();
  }

  function handleCellUnmount(event: CustomEvent<SMUIDataTableCellAccessor>) {
    const idx = cells.indexOf(event.detail);
    if (idx !== -1) {
      cells.splice(idx, 1);
      cells = cells;
    }
    cellAccessorMap.delete(event.detail.element);
    event.stopPropagation();
  }

  function getOrderedCells() {
    return [
      ...getElement().querySelectorAll<HTMLTableCellElement>(
        '.mdc-data-table__header-cell'
      ),
    ]
      .map((element) => cellAccessorMap.get(element))
      .filter(
        (accessor) => accessor && accessor._smui_data_table_header_cell_accessor
      ) as SMUIDataTableCellAccessor[];
  }

  export function getElement() {
    return element;
  }
</script>
