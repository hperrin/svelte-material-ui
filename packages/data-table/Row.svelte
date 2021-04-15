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
  on:click={(event) => header && notifyHeaderClick(event)}
  on:SMUI:checkbox:mount={(event) => (checkbox = event.detail)}
  on:SMUI:checkbox:unmount={() => (checkbox = undefined)}
  aria-selected={checkbox ? (checkbox.checked ? 'true' : 'false') : null}
  {...internalAttrs}
  {...$$restProps}><slot /></tr
>

<script context="module">
  let counter = 0;
</script>

<script>
  import { onMount, getContext } from 'svelte';
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
  export let rowId = 'SMUI-data-table-row-' + counter++;

  let element;
  let checkbox;
  let internalClasses = {};
  let internalAttrs = {};
  let header = getContext('SMUI:data-table:row:header');

  onMount(() => {
    const accessor = {
      _smui_data_table_row_accessor: !header,
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
        return checkbox && checkbox.checked;
      },
      addClass,
      removeClass,
      getAttr,
      addAttr,
    };

    dispatch(getElement(), 'SMUI:data-table:row:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUI:data-table:row:unmount');
    };
  });

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function notifyHeaderClick(event) {
    dispatch(getElement(), 'SMUI:data-table:header:click', event);
  }

  export function getElement() {
    return element;
  }
</script>
