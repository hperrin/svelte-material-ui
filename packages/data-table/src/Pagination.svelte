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

<script lang="ts">
  import { setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    trailing$use?: ActionArray;
    trailing$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `trailing\$${k}`]?: SmuiElementPropMap['div'][k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let trailing$use: ActionArray = [];
  export let trailing$class = '';

  let element: HTMLDivElement;

  setContext('SMUI:label:context', 'data-table:pagination');
  setContext('SMUI:select:context', 'data-table:pagination');
  setContext('SMUI:icon-button:context', 'data-table:pagination');

  export function getElement() {
    return element;
  }
</script>
