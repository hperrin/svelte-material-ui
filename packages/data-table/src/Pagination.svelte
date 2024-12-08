<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-data-table__pagination': true,
  })}
  {...exclude(restProps, ['trailing$'])}
>
  <div
    use:useActions={trailing$use}
    class={classMap({
      [trailing$class]: true,
      'mdc-data-table__pagination-trailing': true,
    })}
    {...prefixFilter(restProps, 'trailing$')}
  >
    {#if rowsPerPage}
      <div class="mdc-data-table__pagination-rows-per-page">
        {@render rowsPerPage?.()}
      </div>
    {/if}

    <div class="mdc-data-table__pagination-navigation">
      {#if total}
        <div class="mdc-data-table__pagination-total">
          {@render total?.()}
        </div>
      {/if}

      {@render children?.()}
    </div>
  </div>
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

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
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    trailing$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    trailing$class?: string;

    children?: Snippet;
    /**
     * A spot for the rows per page selector or indicator.
     */
    rowsPerPage?: Snippet;
    /**
     * A spot for the count and total count.
     */
    total?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    trailing$use = [],
    trailing$class = '',
    children,
    rowsPerPage,
    total,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `trailing\$${k}`]?: SmuiElementPropMap['div'][k];
    } = $props();

  let element: HTMLDivElement;

  setContext('SMUI:label:context', 'data-table:pagination');
  setContext('SMUI:select:context', 'data-table:pagination');
  setContext('SMUI:icon-button:context', 'data-table:pagination');

  export function getElement() {
    return element;
  }
</script>
