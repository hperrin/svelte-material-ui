<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-button__label': context === 'button',
    'mdc-fab__label': context === 'fab',
    'mdc-tab__text-label': context === 'tab',
    'mdc-image-list__label': context === 'image-list',
    'mdc-snackbar__label': context === 'snackbar',
    'mdc-banner__text': context === 'banner',
    'mdc-segmented-button__label': context === 'segmented-button',
    'mdc-data-table__pagination-rows-per-page-label':
      context === 'data-table:pagination',
    'mdc-data-table__header-cell-label':
      context === 'data-table:sortable-header-cell',
  })}
  {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}
  {tabindex}
  {...$$restProps}><slot /></svelte:component
>

<script type="ts">
  import { getContext } from 'svelte';
  import { get_current_component, SvelteComponentDev } from 'svelte/internal';

  import type { ActionArray } from './internal/useActions.js';
  import { forwardEventsBuilder, classMap } from './internal/index.js';
  import Span from './elements/Span.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SvelteComponentDev;

  export let component: typeof SvelteComponentDev = Span;

  const context = getContext<string | undefined>('SMUI:label:context');
  const tabindex = getContext<number | undefined>('SMUI:label:tabindex');

  export function getElement(): ReturnType<
    InstanceType<typeof component>['getElement']
  > {
    return element.getElement();
  }
</script>
