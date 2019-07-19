<button
  bind:this={element}
  aria-label={label}
  aria-hidden="true"
  aria-pressed={pressed}
  class="mdc-icon-button {className}"
  class:material-icons={!toggle}
  class:mdc-icon-button--on={pressed}
  use:Ripple={[ripple && !toggle, true]}
  on:MDCIconButtonToggle:change={handleChange}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['class', 'label', 'ripple', 'toggle', 'pressed'])}
><slot></slot></button>

<script context="module">
  import Icon from './Icon';

  export {Icon};
</script>

<script>
  import {MDCIconButtonToggle} from '@material/icon-button';
  import {onDestroy} from 'svelte';
  import {exclude} from '../exclude';
  import Ripple from '../ripple';

  let className = '';
  export {className as class};
  export let label = '';
  export let ripple = true;
  export let toggle = false;
  export let pressed = false;

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