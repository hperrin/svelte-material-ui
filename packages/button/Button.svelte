<svelte:component
  this={component}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: false,
        color,
        disabled: !!$$props.disabled,
        addClass,
        removeClass,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  class="mdc-button {className} {Object.keys(internalClasses).join(
    ' '
  )} {variant === 'raised' ? 'mdc-button--raised' : ''} {variant ===
  'unelevated'
    ? 'mdc-button--unelevated'
    : ''} {variant === 'outlined' ? 'mdc-button--outlined' : ''} {color ===
  'secondary'
    ? 'smui-button--color-secondary'
    : ''} {touch ? 'mdc-button--touch' : ''} {context === 'card:action'
    ? 'mdc-card__action'
    : ''} {context === 'card:action'
    ? 'mdc-card__action--button'
    : ''} {context === 'dialog:action' ? 'mdc-dialog__button' : ''} {context ===
  'top-app-bar:navigation'
    ? 'mdc-top-app-bar__navigation-icon'
    : ''} {context === 'top-app-bar:action'
    ? 'mdc-top-app-bar__action-item'
    : ''} {context === 'snackbar' ? 'mdc-snackbar__action' : ''}"
  {...actionProp}
  {...defaultProp}
  {...exclude($$props, [
    'use',
    'class',
    'ripple',
    'color',
    'variant',
    'touch',
    'component',
    ...dialogExcludes,
  ])}
  >{#if ripple}<div class="mdc-button__ripple" />{/if}<slot />{#if touch}<div
      class="mdc-button__touch"
    />{/if}</svelte:component
>

<script>
  import { setContext, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder, exclude } from '@smui/common/internal.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let ripple = true;
  export let color = 'primary';
  export let variant = 'text';
  export let touch = false;
  // Purposely left out of props exclude.
  export let href = null;
  export let action = 'close';
  let defaultAction = false;
  export { defaultAction as default };

  let element;
  let internalClasses = {};
  let context = getContext('SMUI:button:context');

  export let component = href == null ? Button : A;

  $: dialogExcludes = context === 'dialog:action' ? ['action', 'default'] : [];

  $: actionProp =
    context === 'dialog:action' && action !== null
      ? { 'data-mdc-dialog-action': action }
      : {};
  $: defaultProp =
    context === 'dialog:action' && defaultAction
      ? { 'data-mdc-dialog-button-default': '' }
      : {};

  setContext('SMUI:label:context', 'button');
  setContext('SMUI:icon:context', 'button');

  function addClass(className) {
    // Doesn't need hasClass.
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    // Doesn't need hasClass.
    if (internalClasses[className]) {
      delete internalClasses[className];
      internalClasses = internalClasses;
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
