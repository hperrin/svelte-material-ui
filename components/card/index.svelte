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
  {...exclude($$props, ['class', 'label', 'padded', 'outlined'])}
><slot></slot></div>

<script context="module">
  import Content from './Content';
  import PrimaryAction from './PrimaryAction';
  import Media from './Media';
  import MediaContent from './MediaContent';
  import Actions from './Actions';
  import ActionButtons from './ActionButtons';
  import ActionIcons from './ActionIcons';
  import Button from './Button';
  import IconButton from './IconButton';

  export {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons, Button, IconButton};
</script>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
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