<div
  bind:this={element}
  aria-label={label}
  class="mdc-chip {className}"
  class:mdc-chip--selected={selected}
  on:MDCChip:selection={handleSelection}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  on:MDCChip:interaction on:MDCChip:selection on:MDCChip:removal on:MDCChip:trailingIconInteraction
  {...exclude($$props, ['className', 'label', 'ripple', 'selected', 'shouldRemoveOnTrailingIconClick'])}
><slot></slot></div>

<script context="module">
  import Set from './Set';
  import Icon from './Icon';
  import Checkmark from './Checkmark';
  import Text from './Text';

  export {Set, Icon, Checkmark, Text};
</script>

<script>
  import {MDCChip} from '@material/chips';
  import {onMount} from 'svelte';
  import {exclude} from '../exclude';

  export let className = '';
  export let label = '';
  export let ripple = true;
  export let selected = false;
  export let shouldRemoveOnTrailingIconClick = true;

  let element;
  let chip;

  let previousSelected = selected;
  $: if (chip && previousSelected !== selected) {
    if (selected !== chip.selected) {
      chip.selected = selected;
    }
    previousSelected = selected;
  }

  $: if (chip && chip.shouldRemoveOnTrailingIconClick !== shouldRemoveOnTrailingIconClick) {
    chip.shouldRemoveOnTrailingIconClick = shouldRemoveOnTrailingIconClick;
  }

  onMount(() => {
    element.setChip = setChip;
  });

  function setChip(component) {
    chip = component;
    if (!ripple) {
      chip.ripple.destroy();
    }
  }

  function handleSelection(e) {
    selected = e.detail.selected;
  }
</script>

<style lang="scss" global>
  @import "@material/chips/mdc-chips";
</style>