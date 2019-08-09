<button
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-icon-button {className}"
  class:mdc-icon-button--on={pressed}
  class:mdc-card__action={context === 'card:action'}
  class:mdc-card__action--icon={context === 'card:action'}
  class:mdc-top-app-bar__navigation-icon={context === 'top-app-bar:navigation'}
  class:mdc-top-app-bar__action-item={context === 'top-app-bar:action'}
  use:Ripple={[ripple && !toggle, {unbounded: true, color}]}
  aria-hidden="true"
  aria-pressed={pressed}
  on:MDCIconButtonToggle:change={handleChange}
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'toggle', 'pressed'])}
><slot></slot></button>

<script>
  import {MDCIconButtonToggle} from '@material/icon-button';
  import {onDestroy, getContext, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';
  import Ripple from '../ripple/index.js';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCIconButtonToggle:change']);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = null;
  export let toggle = false;
  export let pressed = false;

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
      toggleButton.destroy();
    }
    oldToggle = toggle;
  }

  onDestroy(() => {
    if (toggleButton) {
      toggleButton.destroy();
    }
  });

  function handleChange(e) {
    pressed = e.detail.isOn;
  }
</script>