<svelte:options runes={false} />

<tbody
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-data-table__content': true,
  })}
  {...$$restProps}><slot /></tbody
>

<script lang="ts">
  import { onMount, setContext, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  import type { SMUIDataTableRowAccessor } from './Row.types.js';
  import type { SMUIDataTableBodyAccessor } from './Body.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
  };
  type $$Props = OwnProps & SmuiAttrs<'tbody', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
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

  setContext(
    'SMUI:data-table:row:mount',
    (accessor: SMUIDataTableRowAccessor) => {
      rows.push(accessor);
      rowAccessorMap.set(accessor.element, accessor);
    },
  );
  setContext(
    'SMUI:data-table:row:unmount',
    (accessor: SMUIDataTableRowAccessor) => {
      const idx = rows.indexOf(accessor);
      if (idx !== -1) {
        rows.splice(idx, 1);
        rows = rows;
      }
      rowAccessorMap.delete(accessor.element);
    },
  );

  const SMUIDataTableBodyMount = getContext<
    ((accessor: SMUIDataTableBodyAccessor) => void) | undefined
  >('SMUI:data-table:body:mount');
  const SMUIDataTableBodyUnmount = getContext<
    ((accessor: SMUIDataTableBodyAccessor) => void) | undefined
  >('SMUI:data-table:body:unmount');

  onMount(() => {
    const accessor: SMUIDataTableBodyAccessor = {
      get rows() {
        return rows;
      },
      get orderedRows() {
        return getOrderedRows();
      },
    };

    SMUIDataTableBodyMount && SMUIDataTableBodyMount(accessor);

    return () => {
      SMUIDataTableBodyUnmount && SMUIDataTableBodyUnmount(accessor);
    };
  });

  function getOrderedRows() {
    return [
      ...getElement().querySelectorAll<HTMLTableRowElement>(
        '.mdc-data-table__row',
      ),
    ]
      .map((element) => rowAccessorMap.get(element))
      .filter(
        (accessor) => accessor && accessor._smui_data_table_row_accessor,
      ) as SMUIDataTableRowAccessor[];
  }

  export function getElement() {
    return element;
  }
</script>
