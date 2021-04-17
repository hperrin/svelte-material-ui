<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
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
  })}
  {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}
  {tabindex}
  {...$$restProps}><slot /></span
>

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, classMap, useActions } from './internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let element;

  const context = getContext('SMUI:label:context');
  const tabindex = getContext('SMUI:label:tabindex');

  export function getElement() {
    return element;
  }
</script>
