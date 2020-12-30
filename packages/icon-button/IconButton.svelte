<svelte:component
  this={component}
  bind:element={element}
  use={[[Ripple, {ripple: ripple && !toggle, unbounded: true, color, disabled: !!$$props.disabled, classForward: classes => rippleClasses = classes}], forwardEvents, ...use]}
  forwardEvents={forwardedEvents}
  class="
    mdc-icon-button
    {className}
    {rippleClasses.join(' ')}
    {pressed ? 'mdc-icon-button--on' : ''}
    {context === 'card:action' ? 'mdc-card__action' : ''}
    {context === 'card:action' ? 'mdc-card__action--icon' : ''}
    {context === 'top-app-bar:navigation' ? 'mdc-top-app-bar__navigation-icon' : ''}
    {context === 'top-app-bar:action' ? 'mdc-top-app-bar__action-item' : ''}
    {context === 'snackbar' ? 'mdc-snackbar__dismiss' : ''}
  "
  aria-hidden="true"
  aria-pressed={pressed}
  on:MDCIconButtonToggle:change={handleChange}
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'toggle', 'pressed'])}
><slot></slot></svelte:component>

<script>
  import {MDCIconButtonToggle} from '@material/icon-button';
  import {onDestroy, getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import Ripple from '@smui/ripple/bare.js';

  const forwardedEvents = ['MDCIconButtonToggle:change'];
  const forwardEvents = forwardEventsBuilder(get_current_component(), forwardedEvents);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = null;
  export let toggle = false;
  export let pressed = false;
  // Purposely left out of props exclude.
  export let href = null;

  export let component = href == null ? Button : A;

  let element;
  let toggleButton;
  let context = getContext('SMUI:icon-button:context');
  let rippleClasses = [];

  setContext('SMUI:icon:context', 'icon-button');

  let oldToggle = null;
  $: if (element && toggle !== oldToggle) {
    if (toggle) {
      toggleButton = new MDCIconButtonToggle(element);
      if (!ripple) {
        toggleButton.ripple.destroy();
      }
      toggleButton.on = pressed;
    } else if (oldToggle) {
      toggleButton && toggleButton.destroy();
      toggleButton = null;
    }
    oldToggle = toggle;
  }

  $: if (toggleButton && toggleButton.on !== pressed) {
    toggleButton.on = pressed;
  }

  onDestroy(() => {
    toggleButton && toggleButton.destroy();
  });

  function handleChange(e) {
    pressed = e.detail.isOn;
  }
</script>
