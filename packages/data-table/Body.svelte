<tbody
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-data-table__content': true,
  })}
  on:SMUI:data-table:row:mount={handleRowMount}
  on:SMUI:data-table:row:unmount={handleRowUnmount}
  {...$$restProps}><slot /></tbody
>

<script>
  import { onMount, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let rows = [];
  const rowAccessorMap = new WeakMap();

  setContext('SMUI:data-table:row:header', false);

  onMount(() => {
    const accessor = {
      get rows() {
        return rows;
      },
      get orderedRows() {
        return getOrderedRows();
      },
    };

    dispatch(getElement(), 'SMUI:data-table:body:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUI:data-table:body:unmount');
    };
  });

  function handleRowMount(event) {
    rows.push(event.detail);
    rowAccessorMap.set(event.detail.element, event.detail);
    event.stopPropagation();
  }

  function handleRowUnmount(event) {
    const idx = rows.indexOf(event.detail);
    if (idx !== -1) {
      rows.splice(idx, 1);
      rows = rows;
    }
    rowAccessorMap.delete(event.detail.element);
    event.stopPropagation();
  }

  function getOrderedRows() {
    return [...getElement().querySelectorAll('.mdc-data-table__row')]
      .map((element) => rowAccessorMap.get(element))
      .filter((accessor) => accessor && accessor._smui_data_table_row_accessor);
  }

  export function getElement() {
    return element;
  }
</script>
