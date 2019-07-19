<div
  bind:this={element}
  class="mdc-dialog {className}"
  role="alertdialog"
  aria-modal="true"
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  on:MDCDialog:opening on:MDCDialog:opened on:MDCDialog:closing on:MDCDialog:closed
  {...exclude($$props, ['class'])}
>
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface">
      <slot></slot>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>

<script context="module">
  import Title from './Title';
  import Content from './Content';
  import Actions from './Actions';
  import Button from './Button';

  export {Title, Content, Actions, Button};
</script>

<script>
  import {MDCDialog} from '@material/dialog';
  import {onMount, onDestroy} from 'svelte';
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let escapeKeyAction = 'close';
  export let scrimClickAction = 'close';
  export let autoStackButtons = true;

  let element;
  let dialog;

  $: dialog && (dialog.escapeKeyAction = escapeKeyAction);
  $: dialog && (dialog.scrimClickAction = scrimClickAction);
  $: dialog && (dialog.autoStackButtons = autoStackButtons);

  onMount(() => {
    dialog = new MDCDialog(element);
  });

  onDestroy(() => {
    dialog.destroy();
  });

  export function open() {
    return dialog.open();
  }

  export function close(action) {
    return dialog.close(action);
  }

  export function isOpen() {
    return dialog.isOpen();
  }

  export function layout() {
    return dialog.layout();
  }
</script>

<style lang="scss" global>
  @import "@material/dialog/mdc-dialog";
</style>