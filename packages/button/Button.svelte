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
        disabled: !!$$restProps.disabled,
        addClass,
        removeClass,
        addStyle,
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
    'mdc-snackbar__action': context === 'snackbar:actions',
    'mdc-banner__secondary-action': context === 'banner' && secondary,
    'mdc-banner__primary-action': context === 'banner' && !secondary,
    'mdc-tooltip__action': context === 'tooltip:rich-actions',
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...actionProp}
  {...defaultProp}
  {...secondaryProp}
  {href}
  on:click={handleClick}
  {...$$restProps}
  ><div class="mdc-button__ripple" />
  <slot />{#if touch}<div class="mdc-button__touch" />{/if}</svelte:component
>

<script>
  import { setContext, getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let color = 'primary';
  export let variant = 'text';
  export let touch = false;
  export let href = null;
  export let action = 'close';
  let defaultAction = false;
  export { defaultAction as default };
  export let secondary = false;

  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext('SMUI:button:context');

  export let component = href == null ? Button : A;

  $: actionProp =
    context === 'dialog:action' && action != null
      ? { 'data-mdc-dialog-action': action }
      : { action: $$props.action };
  $: defaultProp =
    context === 'dialog:action' && defaultAction
      ? { 'data-mdc-dialog-button-default': '' }
      : { default: $$props.default };
  $: secondaryProp =
    context === 'banner' ? {} : { secondary: $$props.secondary };

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

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function handleClick() {
    if (context === 'banner') {
      dispatch(
        getElement(),
        secondary
          ? 'SMUI:banner:button:secondaryActionClick'
          : 'SMUI:banner:button:primaryActionClick'
      );
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
