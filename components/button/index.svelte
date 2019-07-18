<button
  aria-label={label}
  class="mdc-button {className}"
  class:mdc-button--raised={raised}
  class:mdc-button--unelevated={unelevated}
  class:mdc-button--outlined={outlined}
  class:mdc-button--dense={dense}
  use:Ripple={[ripple, false]}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['className', 'label', 'ripple', 'raised', 'unelevated', 'outlined', 'dense'])}
><slot></slot></button>

<script context="module">
  import Label from './Label';
  import Icon from './Icon';

  export {Label, Icon};
</script>

<script>
  import {exclude} from '../exclude';
  import Ripple from '../ripple';

  export let className = '';
  export let label = '';
  export let ripple = true;
  export let raised = false;
  export let unelevated = false;
  export let outlined = false;
  export let dense = false;
</script>

<style lang="scss" global>
  @import "@material/button/mdc-button";
</style>