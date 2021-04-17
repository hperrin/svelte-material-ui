<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-data-table__pagination': true,
  })}
  {...exclude($$restProps, ['trailing$'])}
>
  <div
    use:useActions={trailing$use}
    class={classMap({
      [trailing$class]: true,
      'mdc-data-table__pagination-trailing': true,
    })}
    {...prefixFilter($$restProps, 'trailing$')}
  >
    {#if $$slots.rowsPerPage}
      <div class="mdc-data-table__pagination-rows-per-page">
        <slot name="rowsPerPage" />
      </div>
    {/if}

    <div class="mdc-data-table__pagination-navigation">
      {#if $$slots.total}
        <div class="mdc-data-table__pagination-total">
          <slot name="total" />
        </div>
      {/if}

      <slot />
    </div>
  </div>
</div>

<script>
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let trailing$use = [];
  export let trailing$class = '';

  let element;

  setContext('SMUI:label:context', 'data-table:pagination');
  setContext('SMUI:select:context', 'data-table:pagination');
  setContext('SMUI:icon-button:context', 'data-table:pagination');

  export function getElement() {
    return element;
  }
</script>
