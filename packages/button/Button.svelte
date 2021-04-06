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
  class={classMap({
    [className]: true,
    'mdc-button': true,
    'mdc-button--raised': variant === 'raised',
    'mdc-button--unelevated': variant === 'unelevated',
    'mdc-button--outlined': variant === 'outlined',
    'smui-button--color-secondary': color === 'secondary',
    'mdc-button--touch': touch,
    'mdc-card__action': context === 'card:action',
    'mdc-card__action--button': context === 'card:action',
    'mdc-dialog__button': context === 'dialog:action',
    'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',
    'mdc-top-app-bar__action-item': context === 'top-app-bar:action',
    'mdc-snackbar__action': context === 'snackbar',
    ...internalClasses,
  })}
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
  ><div class="mdc-button__ripple" />
  <slot />{#if touch}<div class="mdc-button__touch" />{/if}</svelte:component
>

<script>
  import { setContext, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
  } from '@smui/common/internal.js';
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
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
