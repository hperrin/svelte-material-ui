<span
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
  import { getContext, createEventDispatcher } from 'svelte';
  import { forwardEventsBuilder, exclude, useActions } from './internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };

  const context = getContext('SMUI:label:context');
  const tabindex = getContext('SMUI:label:tabindex');
</script>
