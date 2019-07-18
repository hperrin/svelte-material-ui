<div
  class="mdc-card__primary-action {className}"
  class:smui-card__primary-action--padded={padded}
  use:Ripple={[ripple, false]}
  {tabindex}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['className', 'ripple', 'padded', 'tabindex'])}
><slot></slot></div>

<script>
  import {exclude} from '../exclude';
  import Ripple from '../ripple';

  export let className = '';
  export let ripple = true;
  export let padded = false;
  export let tabindex = '0';
</script>

<style>
  .smui-card__primary-action--padded {
    padding: 16px;
  }
</style>