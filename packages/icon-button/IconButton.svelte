{#if href}
  <a
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-icon-button
      {className}
      {pressed ? 'mdc-icon-button--on' : ''}
      {context === 'card:action' ? 'mdc-card__action' : ''}
      {context === 'card:action' ? 'mdc-card__action--icon' : ''}
      {context === 'top-app-bar:navigation' ? 'mdc-top-app-bar__navigation-icon' : ''}
      {context === 'top-app-bar:action' ? 'mdc-top-app-bar__action-item' : ''}
      {context === 'snackbar' ? 'mdc-snackbar__dismiss' : ''}
    "
    use:Ripple={{ripple: ripple && !toggle, unbounded: true, color}}
    aria-hidden="true"
    aria-pressed={pressed}
    {href}
    on:MDCIconButtonToggle:change={handleChange}
    {...props}
  ><slot></slot></a>
{:else}
  <button
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-icon-button
      {className}
      {pressed ? 'mdc-icon-button--on' : ''}
      {context === 'card:action' ? 'mdc-card__action' : ''}
      {context === 'card:action' ? 'mdc-card__action--icon' : ''}
      {context === 'top-app-bar:navigation' ? 'mdc-top-app-bar__navigation-icon' : ''}
      {context === 'top-app-bar:action' ? 'mdc-top-app-bar__action-item' : ''}
      {context === 'snackbar' ? 'mdc-snackbar__dismiss' : ''}
    "
    use:Ripple={{ripple: ripple && !toggle, unbounded: true, color}}
    aria-hidden="true"
    aria-pressed={pressed}
    on:MDCIconButtonToggle:change={handleChange}
    {...props}
  ><slot></slot></button>
{/if}

<script>
  import {MDCIconButtonToggle} from '@material/icon-button';
  import {onDestroy, getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCIconButtonToggle:change']);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = null;
  export let toggle = false;
  export let pressed = false;
  export let href = null;

  $: props = exclude($$props, ['use', 'class', 'ripple', 'color', 'toggle', 'pressed', 'href']);

  let element;
  let toggleButton;
  let context = getContext('SMUI:icon-button:context');

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
