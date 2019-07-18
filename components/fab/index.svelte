<button
  aria-label={label}
  class="mdc-fab {className}"
  class:mdc-fab--mini={mini}
  class:mdc-fab--exited={exited}
  class:mdc-fab--extended={extended}
  use:Ripple={[ripple, false]}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['className', 'label', 'ripple', 'mini', 'exited', 'extended'])}
><slot></slot></button>

<script context="module">
  import Label from './Label';
  import Icon from './Icon';

  export {Label, Icon};
</script>

<script>
  import {Ripple} from '../Ripple.js';
  import {exclude} from '../exclude.js';

  export let className = '';
  export let label = '';
  export let ripple = true;
  export let mini = false;
  export let exited = false;
  export let extended = false;
</script>

<style lang="scss" global>
  @import "@material/fab/mdc-fab";
</style>