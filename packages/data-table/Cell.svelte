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
      ...internalClasses,
    })}
    on:change={(event) => checkbox && notifyHeaderChange(event)}
    role="columnheader"
    scope="col"
    {...internalAttrs}
    {...props}><slot /></th
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
    {...props}><slot /></td
  >
{/if}

<script context="module">
  let counter = 0;
</script>

<script>
  import { onMount, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'SMUI:checkbox:mount',
    'SMUI:checkbox:unmount',
    'SMUI:data-table:header:checkbox:change',
    'SMUI:data-table:body:checkbox:change',
    'SMUI:data-table:cell:mount',
    'SMUI:data-table:cell:unmount',
  ]);

  let header = getContext('SMUI:data-table:row:header');

  export let use = [];
  let className = '';
  export { className as class };
  export let numeric = false;
  export let checkbox = false;
  export let columnId = header ? 'SMUI-data-table-column-' + counter++ : null;

  let element;
  let internalClasses = {};
  let internalAttrs = {};

  $: props = exclude($$props, [
    'use',
    'class',
    'numeric',
    'checkbox',
    'columnId',
  ]);

  onMount(() => {
    const accessor = {
      _smui_data_table_header_cell_accessor: header,
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
    };

    dispatch(getElement(), 'SMUI:data-table:cell:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUI:data-table:cell:unmount');
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

  function notifyHeaderChange(event) {
    dispatch(getElement(), 'SMUI:data-table:header:checkbox:change', event);
  }

  function notifyBodyChange(event) {
    dispatch(getElement(), 'SMUI:data-table:body:checkbox:change', event);
  }

  export function getElement() {
    return element;
  }
</script>
