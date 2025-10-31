<svelte:options runes />

<thead bind:this={element} use:useActions={use} {...restProps}
  >{@render children?.()}</thead
>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount, setContext, getContext } from 'svelte';
  import type { SmuiAttrs, SMUICheckboxInputAccessor } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { useActions } from '@smui/common/internal';

  import type { SMUIDataTableCellAccessor } from './Cell.types.js';
  import type { SMUIDataTableHeadAccessor } from './Head.types.js';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;

    children?: Snippet;
  };
  let {
    use = [],
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'thead', keyof OwnProps> = $props();

  let element: HTMLTableSectionElement;
  let checkbox: SMUICheckboxInputAccessor | undefined = $state();
  let cells: SMUIDataTableCellAccessor[] = [];
  const cellAccessorMap = new WeakMap<
    HTMLTableCellElement,
    SMUIDataTableCellAccessor
  >();

  setContext('SMUI:data-table:row:header', true);

  const SMUICheckboxMount = getContext<
    ((accessor: SMUICheckboxInputAccessor) => void) | undefined
  >('SMUI:checkbox:mount');
  setContext('SMUI:checkbox:mount', (accessor: SMUICheckboxInputAccessor) => {
    checkbox = accessor;
    SMUICheckboxMount && SMUICheckboxMount(accessor);
  });
  const SMUICheckboxUnount = getContext<
    ((accessor: SMUICheckboxInputAccessor) => void) | undefined
  >('SMUI:checkbox:unmount');
  setContext('SMUI:checkbox:unmount', (accessor: SMUICheckboxInputAccessor) => {
    checkbox = undefined;
    SMUICheckboxUnount && SMUICheckboxUnount(accessor);
  });
  setContext(
    'SMUI:data-table:cell:mount',
    (accessor: SMUIDataTableCellAccessor) => {
      cells.push(accessor);
      cellAccessorMap.set(accessor.element, accessor);
    },
  );
  setContext(
    'SMUI:data-table:cell:unmount',
    (accessor: SMUIDataTableCellAccessor) => {
      const idx = cells.findIndex((a) => a === accessor);
      if (idx !== -1) {
        cells.splice(idx, 1);
      }
      cellAccessorMap.delete(accessor.element);
    },
  );

  const SMUIDataTableHeaderMount = getContext<
    ((accessor: SMUIDataTableHeadAccessor) => void) | undefined
  >('SMUI:data-table:header:mount');
  const SMUIDataTableHeaderUnmount = getContext<
    ((accessor: SMUIDataTableHeadAccessor) => void) | undefined
  >('SMUI:data-table:header:unmount');

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

    SMUIDataTableHeaderMount && SMUIDataTableHeaderMount(accessor);

    return () => {
      SMUIDataTableHeaderUnmount && SMUIDataTableHeaderUnmount(accessor);
    };
  });

  function getOrderedCells() {
    return [
      ...getElement().querySelectorAll<HTMLTableCellElement>(
        '.mdc-data-table__header-cell',
      ),
    ]
      .map((element) => cellAccessorMap.get(element))
      .filter(
        (accessor) =>
          accessor && accessor._smui_data_table_header_cell_accessor,
      ) as SMUIDataTableCellAccessor[];
  }

  export function getElement() {
    return element;
  }
</script>
