<svelte:component
  this={component}
  use={[[Ripple, {ripple, unbounded: false, classForward: classes => rippleClasses = classes}], forwardEvents, ...use]}
  class="
    mdc-button
    {className}
    {rippleClasses.join(' ')}
    {variant === 'raised' ? 'mdc-button--raised' : ''}
    {variant === 'unelevated' ? 'mdc-button--unelevated' : ''}
    {variant === 'outlined' ? 'mdc-button--outlined' : ''}
    {dense ? 'mdc-button--dense' : ''}
    {color === 'secondary' ? 'smui-button--color-secondary' : ''}
    {context === 'card:action' ? 'mdc-card__action' : ''}
    {context === 'card:action' ? 'mdc-card__action--button' : ''}
    {context === 'dialog:action' ? 'mdc-dialog__button' : ''}
    {context === 'top-app-bar:navigation' ? 'mdc-top-app-bar__navigation-icon' : ''}
    {context === 'top-app-bar:action' ? 'mdc-top-app-bar__action-item' : ''}
    {context === 'snackbar' ? 'mdc-snackbar__action' : ''}
  "
  {...actionProp}
  {...defaultProp}
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'variant', 'dense', ...dialogExcludes])}
><slot></slot></svelte:component>

<script>
  import {setContext, getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = 'primary';
  export let variant = 'text';
  export let dense = false;
  // Purposely left out of props exclude.
  export let href = null;
  export let action = 'close';
  let defaultAction = false;
  export {defaultAction as default};
  export let component = href == null ? Button : A;

  let context = getContext('SMUI:button:context');
  let rippleClasses = [];

  $: dialogExcludes = (context === 'dialog:action') ? ['action', 'default'] : [];

  $: actionProp = (context === 'dialog:action' && action !== null) ? {'data-mdc-dialog-action': action} : {};
  $: defaultProp = (context === 'dialog:action' && defaultAction) ? {'data-mdc-dialog-button-default': ''} : {};

  setContext('SMUI:label:context', 'button');
  setContext('SMUI:icon:context', 'button');
</script>
