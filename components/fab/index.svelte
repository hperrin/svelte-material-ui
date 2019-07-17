<button
  aria-label={label}
  class="mdc-fab {$$props.class || ''}"
  class:mdc-fab--mini={mini}
  class:mdc-fab--exited={exited}
  class:mdc-fab--extended={extended}
  use:Ripple={ripple}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['class', 'label', 'mini', 'exited', 'extended', 'ripple'])}
><slot></slot></button>

<script context="module">
  import Label from './Label';
  import Icon from './Icon';

  export {Label, Icon};
</script>

<script>
  import Ripple from '../ripple.js';
  import exclude from '../exclude.js';

  export let label = '';
  export let ripple = true;
  export let disabled = false;
  export let mini = false;
  export let exited = false;
  export let extended = false;
</script>

<style type="text/sass">
  @import "@material/fab/mdc-fab";
</style>