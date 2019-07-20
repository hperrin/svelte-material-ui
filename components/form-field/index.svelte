<div
  bind:this={element}
  class="mdc-form-field {className}"
  class:mdc-form-field--align-end={alignEnd}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  {...exclude($$props, ['class', 'alignEnd'])}
>
  <slot name="input"></slot>
  <label for={id}><slot name="label"></slot></label>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {MDCFormField} from '@material/form-field';
  import {onMount, onDestroy, setContext} from 'svelte';
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let alignEnd = false;

  let element;
  let formField;
  let id = 'SMUI-form-field-'+(counter++);

  setContext('SMUI:formField', () => formField);
  setContext('SMUI:formField:id', id);

  onMount(() => {
    formField = new MDCFormField(element);
  });

  onDestroy(() => {
    if (formField) {
      formField.destroy();
    }
  });
</script>

<style lang="scss" global>
  @import "@material/form-field/mdc-form-field";
</style>