<Button
  class="mdc-dialog__button {defaultAction ? 'mdc-dialog__button--default' : ''} {className}"
  data-mdc-dialog-action={action}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['class', 'default', 'action'])}
><slot></slot></Button>

<script>
  import {exclude} from '../exclude';
  import Button from '../button';

  let className = '';
  export {className as class};
  let defaultAction = false;
  export {defaultAction as default};
  export let action = 'close';
</script>