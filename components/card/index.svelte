<div
  aria-label={label}
  class="mdc-card {className}"
  class:smui-card--padded={padded}
  class:mdc-card--outlined={outlined}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['className', 'label', 'padded', 'outlined'])}
><slot></slot></div>

<script context="module">
  import PrimaryAction from './PrimaryAction';
  import Media from './Media';
  import MediaContent from './MediaContent';

  export {PrimaryAction, Media, MediaContent};
</script>

<script>
  import {exclude} from '../exclude';

  export let className = '';
  export let label = '';
  export let padded = false;
  export let outlined = false;
</script>

<style lang="scss" global>
  @import "@material/card/mdc-card";

  .smui-card--padded {
    padding: 16px;
  }
</style>