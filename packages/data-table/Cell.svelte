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
      'mdc-data-table__header-cell--with-sort': sortable,
      'mdc-data-table__header-cell--sorted': sortable && $sort === columnId,
      ...internalClasses,
    })}
    on:change={(event) => checkbox && notifyHeaderChange(event)}
    role="columnheader"
    scope="col"
    data-column-id={columnId}
    aria-sort={sortable ? ($sort === columnId ? $sortDirection : 'none') : null}
    {...internalAttrs}
    {...$$restProps}
    >{#if sortable}
      <div class="mdc-data-table__header-cell-wrapper">
        <slot />
        <div
          class="mdc-data-table__sort-status-label"
          aria-hidden="true"
          id="{columnId}-status-label"
        >
          {$sort === columnId
            ? $sortDirection === 'ascending'
              ? sortAscendingAriaLabel
              : sortDescendingAriaLabel
            : ''}
        </div>
      </div>
    {:else}<slot />{/if}</th
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
    {...$$restProps}><slot /></td
  >
{/if}

<script context="module">
  let counter = 0;
</script>

<script>
  import { onMount, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let header = getContext('SMUI:data-table:row:header');

  export let use = [];
  let className = '';
  export { className as class };
  export let numeric = false;
  export let checkbox = false;
  export let columnId = header ? 'SMUI-data-table-column-' + counter++ : null;
  export let sortable = getContext('SMUI:data-table:sortable');

  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let sort = getContext('SMUI:data-table:sort');
  let sortDirection = getContext('SMUI:data-table:sortDirection');
  let sortAscendingAriaLabel = getContext(
    'SMUI:data-table:sortAscendingAriaLabel'
  );
  let sortDescendingAriaLabel = getContext(
    'SMUI:data-table:sortDescendingAriaLabel'
  );

  if (sortable) {
    setContext('SMUI:label:context', 'data-table:sortable-header-cell');
    setContext('SMUI:icon-button:context', 'data-table:sortable-header-cell');
    setContext('SMUI:icon-button:aria-describedby', columnId + '-status-label');
  }

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
