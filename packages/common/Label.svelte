<span
  use:useActions={use}
  use:forwardEvents
  class="
    {className}
    {context === 'button' ? 'mdc-button__label' : ''}
    {context === 'fab' ? 'mdc-fab__label' : ''}
    {context === 'chip' ? 'mdc-chip__text' : ''}
    {context === 'tab' ? 'mdc-tab__text-label' : ''}
    {context === 'image-list' ? 'mdc-image-list__label' : ''}
    {context === 'snackbar' ? 'mdc-snackbar__label' : ''}
  "
  {...((context === 'snackbar') ? {role: 'status', 'aria-live': 'polite'} : {})}
  {...exclude($$props, ['use', 'class'])}
><slot></slot></span>

<script>
  import {getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from './forwardEvents.js';
  import {exclude} from './exclude.js';
  import {useActions} from './useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};

  const context = getContext('SMUI:label:context');
</script>
