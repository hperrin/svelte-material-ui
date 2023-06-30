<tr
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-data-table__header-row': header,
    'mdc-data-table__row': !header,
    'mdc-data-table__row--selected': !header && checkbox && checkbox.checked,
    ...internalClasses,
  })}
  on:click={(event) =>
    header ? notifyHeaderClick(event) : notifyRowClick(event)}
  on:SMUICheckbox:mount={handleCheckboxMount}
  on:SMUICheckbox:unmount={() => (checkbox = undefined)}
  aria-selected={checkbox ? (checkbox.checked ? 'true' : 'false') : undefined}
  {...internalAttrs}
  {...$$restProps}><slot /></tr
>

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import { onMount, getContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs, SMUICheckboxInputAccessor } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  import type { SMUIDataTableRowAccessor } from './Row.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    rowId?: string;
  };
  type $$Props = OwnProps & SmuiAttrs<'tr', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let rowId = 'SMUI-data-table-row-' + counter++;

  let element: HTMLTableRowElement;
  let checkbox: SMUICheckboxInputAccessor | undefined = undefined;
  let internalClasses: { [k: string]: boolean } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let header = getContext<boolean>('SMUI:data-table:row:header');

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

    dispatch(getElement(), 'SMUIDataTableRow:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUIDataTableRow:unmount', accessor);
    };
  });

  function handleCheckboxMount(event: CustomEvent<SMUICheckboxInputAccessor>) {
    checkbox = event.detail;
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

  function notifyHeaderClick(event: MouseEvent) {
    dispatch(getElement(), 'SMUIDataTableHeader:click', event);
  }

  function notifyRowClick(event: MouseEvent) {
    dispatch(getElement(), 'SMUIDataTableRow:click', {
      rowId,
      target: event.target,
    });
  }

  export function getElement() {
    return element;
  }
</script>
