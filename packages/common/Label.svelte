<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    {className}
    {context === 'button'
    ? 'mdc-button__label'
    : ''}
    {context === 'fab' ? 'mdc-fab__label' : ''}
    {context === 'tab'
    ? 'mdc-tab__text-label'
    : ''}
    {context === 'image-list'
    ? 'mdc-image-list__label'
    : ''}
    {context === 'snackbar' ? 'mdc-snackbar__label' : ''}
  "
  {...context === 'snackbar' ? { role: 'status', 'aria-live': 'polite' } : {}}
  {...tabindex != null ? { tabindex } : {}}
  {...exclude($$props, ['use', 'class'])}><slot /></span
>

<script>
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, exclude, useActions } from './internal.js';

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
