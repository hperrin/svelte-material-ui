<div
  bind:this={element}
  class="mdc-radio {className}"
  class:mdc-radio--disabled={disabled}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  on:SMUI:mountFormField
  {...exclude($$props, ['class', 'disabled', 'group', 'value', 'inputProps'])}
>
  <input
    class="mdc-radio__native-control {inputProps.class}"
    type="radio"
    {id}
    {disabled}
    bind:group
    {value}
    {checked}
    on:change={handleChange}
    on:change on:input
    {...exclude(inputProps, ['class'])}
  />
  <div class="mdc-radio__background">
    <div class="mdc-radio__outer-circle"></div>
    <div class="mdc-radio__inner-circle"></div>
  </div>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {MDCRadio} from '@material/radio';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let disabled = false;
  export let group = null;
  export let value = null;
  export let inputProps = {
    class: ''
  };

  let element;
  let radio;
  let formField = getContext('SMUI:formField');
  let id = getContext('SMUI:formField:id');

  $: checked = group === value;

  $: if (radio) {
    radio.checked = checked;
  }

  $: if (radio) {
    radio.disabled = disabled;
  }

  $: if (radio) {
    radio.value = value;
  }

  onMount(() => {
    radio = new MDCRadio(element);

    if (formField && formField()) {
      formField().input = radio;
    }
  });

  onDestroy(() => {
    radio.destroy();
  });

  function handleChange(e) {
    if (e.target.checked) {
      group = value;
    }
  }

  export function getId() {
    return id;
  }
</script>

<style lang="scss" global>
  @import "@material/radio/mdc-radio";
</style>