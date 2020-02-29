<i
  use:useActions={use}
  use:forwardEvents
  class="
    {className}
    {context === 'button' ? 'mdc-button__icon' : ''}
    {context === 'fab' ? 'mdc-fab__icon' : ''}
    {context === 'icon-button' ? 'mdc-icon-button__icon' : ''}
    {(context === 'icon-button' && on) ? 'mdc-icon-button__icon--on' : ''}
    {context === 'chip' ? 'mdc-chip__icon' : ''}
    {(context === 'chip' && leading) ? 'mdc-chip__icon--leading' : ''}
    {(context === 'chip' && leadingHidden) ? 'mdc-chip__icon--leading-hidden' : ''}
    {(context === 'chip' && trailing) ? 'mdc-chip__icon--trailing' : ''}
    {context === 'tab' ? 'mdc-tab__icon' : ''}
  "
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'on', 'leading', 'leadingHidden', 'trailing'])}
><slot></slot></i>

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
  export let on = false;
  export let leading = false;
  export let leadingHidden = false;
  export let trailing = false;

  const context = getContext('SMUI:icon:context');
</script>
