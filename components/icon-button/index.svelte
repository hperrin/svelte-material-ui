<button
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-icon-button {className}"
  class:material-icons={!toggle}
  class:mdc-icon-button--on={pressed}
  use:Ripple={[ripple && !toggle, true]}
  aria-hidden="true"
  aria-pressed={pressed}
  on:MDCIconButtonToggle:change={handleChange}
  {...exclude($$props, ['use', 'class', 'ripple', 'toggle', 'pressed'])}
><slot></slot></button>

<script context="module">
  import Icon from '../common/Icon';

  export {Icon};
</script>

<script>
  import {MDCIconButtonToggle} from '@material/icon-button';
  import {onDestroy, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';
  import Ripple from '../ripple';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCIconButtonToggle:change']);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let toggle = false;
  export let pressed = false;

  setContext('SMUI:iconContext', 'iconButton');

  let element;
  let toggleButton;

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

<style lang="scss" global>
  @import "@material/icon-button/mdc-icon-button";
</style>