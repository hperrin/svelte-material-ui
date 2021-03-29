<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class="
    {className}
    {context === 'button'
    ? 'mdc-button__icon'
    : ''}
    {context === 'fab' ? 'mdc-fab__icon' : ''}
    {context ===
  'icon-button'
    ? 'mdc-icon-button__icon'
    : ''}
    {context === 'icon-button' && on
    ? 'mdc-icon-button__icon--on'
    : ''}
    {context === 'tab' ? 'mdc-tab__icon' : ''}
  "
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'on'])}><slot /></svelte:component
>

<script>
  import { getContext, createEventDispatcher } from 'svelte';
  import { forwardEventsBuilder, exclude } from './internal.js';
  import I from './I.svelte';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };
  export let on = false;

  export let component = I;

  let element;

  const context = getContext('SMUI:icon:context');

  export function dispatchEvent(event) {
    element.dispatchEvent(event);
  }
</script>
