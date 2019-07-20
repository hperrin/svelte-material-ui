<div
  bind:this={element}
  class="mdc-checkbox {className}"
  class:mdc-checkbox--disabled={disabled}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  on:SMUI:mountFormField
  {...exclude($$props, ['class', 'disabled', 'indeterminate', 'group', 'checked', 'value', 'inputProps'])}
>
  <input
    class="mdc-checkbox__native-control {inputProps.class}"
    type="checkbox"
    {id}
    {disabled}
    bind:checked={nativeChecked}
    {value}
    on:change={handleChange}
    on:change on:input
    {...exclude(inputProps, ['class'])}
  />
  <div class="mdc-checkbox__background">
    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
      <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
    </svg>
    <div class="mdc-checkbox__mixedmark"></div>
  </div>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {MDCCheckbox} from '@material/checkbox';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {exclude} from '../exclude';

  let uninitializedValue = () => {};

  let className = '';
  export {className as class};
  export let disabled = false;
  export let indeterminate = false;
  export let group = uninitializedValue;
  export let checked = uninitializedValue;
  export let value = null;
  export let inputProps = {
    class: ''
  };

  let element;
  let checkbox;
  let formField = getContext('SMUI:formField');
  let id = getContext('SMUI:formField:id');
  let nativeChecked = group === uninitializedValue ? (checked === uninitializedValue ? false : checked) : group.indexOf(value) !== -1;

  $: if (checkbox) {
    if (group !== uninitializedValue) {
      checkbox.checked = group.indexOf(value) !== -1;
    } else {
      checkbox.checked = checked;
    }
  }

  $: if (checkbox) {
    checkbox.indeterminate = indeterminate;
  }

  $: if (checkbox) {
    checkbox.disabled = disabled;
  }

  $: if (checkbox) {
    checkbox.value = value;
  }

  let oldChecked = checked;
  $: if (checked !== uninitializedValue) {
    if (checked === oldChecked) {
      checked = nativeChecked;
    } else if (nativeChecked !== checked) {
      nativeChecked = checked;
    }
    oldChecked = checked;
  }

  onMount(() => {
    checkbox = new MDCCheckbox(element);

    if (formField && formField()) {
      formField().input = radio;
    }
  });

  onDestroy(() => {
    checkbox.destroy();
  });

  function handleChange(e) {
    if (group !== uninitializedValue) {
      const idx = group.indexOf(value);
      if (e.target.checked && idx === -1) {
        group.push(value);
        group = group;
      } else if (!e.target.checked && idx !== -1) {
        group.splice(idx, 1);
        group = group;
      }
    }
  }

  export function getId() {
    return id;
  }
</script>

<style lang="scss" global>
  @import "@material/checkbox/mdc-checkbox";
</style>