<thead
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  on:SMUI:checkbox:mount={(event) => (checkbox = event.detail)}
  on:SMUI:checkbox:unmount={() => (checkbox = undefined)}
  on:SMUI:data-table:cell:mount={handleCellMount}
  on:SMUI:data-table:cell:unmount={handleCellUnmount}
  {...$$restProps}><slot /></thead
>

<script>
  import { onMount, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];

  let element;
  let checkbox;
  let cells = [];
  const cellAccessorMap = new WeakMap();

  setContext('SMUI:data-table:row:header', true);

  onMount(() => {
    const accessor = {
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

    dispatch(getElement(), 'SMUI:data-table:header:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUI:data-table:header:unmount');
    };
  });

  function handleCellMount(event) {
    cells.push(event.detail);
    cellAccessorMap.set(event.detail.element, event.detail);
    event.stopPropagation();
  }

  function handleCellUnmount(event) {
    const idx = cells.indexOf(event.detail);
    if (idx !== -1) {
      cells.splice(idx, 1);
      cells = cells;
    }
    cellAccessorMap.delete(event.detail.element);
    event.stopPropagation();
  }

  function getOrderedCells() {
    return [...getElement().querySelectorAll('.mdc-data-table__header-cell')]
      .map((element) => cellAccessorMap.get(element))
      .filter(
        (accessor) => accessor && accessor._smui_data_table_header_cell_accessor
      );
  }

  export function getElement() {
    return element;
  }
</script>
