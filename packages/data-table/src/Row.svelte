<svelte:options runes />

<tr
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-data-table__header-row': header,
    'mdc-data-table__row': !header,
    'mdc-data-table__row--selected': !header && checkbox && checkbox.checked,
    ...internalClasses,
  })}
  aria-selected={checkbox ? (checkbox.checked ? 'true' : 'false') : undefined}
  {...internalAttrs}
  {...restProps}
  onclick={(e) => {
    if (header) {
      notifyHeaderClick(e);
    } else {
      notifyRowClick(e);
    }
    restProps.onclick?.(e);
  }}>{@render children?.()}</tr
>

<script module lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount, getContext, setContext } from 'svelte';
  import type { SmuiAttrs, SMUICheckboxInputAccessor } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';

  import type { SMUIDataTableRowAccessor } from './Row.types.js';

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
     * An optional unique row ID.
     *
     * If none is provided, one will be generated.
     */
    rowId?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    rowId = 'SMUI-data-table-row-' + counter++,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'tr', keyof OwnProps> = $props();

  let element: HTMLTableRowElement;
  let checkbox: SMUICheckboxInputAccessor | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let header = getContext<boolean>('SMUI:data-table:row:header');

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

  const SMUIDataTableRowMount = getContext<
    ((accessor: SMUIDataTableRowAccessor) => void) | undefined
  >('SMUI:data-table:row:mount');
  const SMUIDataTableRowUnmount = getContext<
    ((accessor: SMUIDataTableRowAccessor) => void) | undefined
  >('SMUI:data-table:row:unmount');

  onMount(() => {
    const accessor: SMUIDataTableRowAccessor = header
      ? {
          _smui_data_table_row_accessor: false,
          get element() {
            return getElement();
          },
          get checkbox() {
            return checkbox;
          },
          get rowId() {
            return undefined;
          },
          get selected() {
            return (checkbox && checkbox.checked) ?? false;
          },
          addClass,
          removeClass,
          getAttr,
          addAttr,
        }
      : {
          _smui_data_table_row_accessor: true,
          get element() {
            return getElement();
          },
          get checkbox() {
            return checkbox;
          },
          get rowId() {
            return rowId;
          },
          get selected() {
            return (checkbox && checkbox.checked) ?? false;
          },
          addClass,
          removeClass,
          getAttr,
          addAttr,
        };

    SMUIDataTableRowMount && SMUIDataTableRowMount(accessor);

    return () => {
      SMUIDataTableRowUnmount && SMUIDataTableRowUnmount(accessor);
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

  function notifyHeaderClick(event: MouseEvent) {
    dispatch(getElement(), 'SMUIDataTableHeaderClick', event);
  }

  function notifyRowClick(event: MouseEvent) {
    dispatch(getElement(), 'SMUIDataTableRowClick', {
      rowId,
      target: event.target,
    });
  }

  export function getElement() {
    return element;
  }
</script>
