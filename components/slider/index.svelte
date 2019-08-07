<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-slider {className}"
  class:mdc-slider--discrete={discrete}
  class:mdc-slider--display-markers={discrete && displayMarkers}
  role="slider"
  aria-disabled={disabled ? 'true' : 'false'}
  aria-valuemin={min}
  aria-valuemax={max}
  aria-valuenow={value}
  data-step={step === 0 ? undefined : step}
  {tabindex}
  {...incoming}
  on:MDCSlider:change={handleChange}
  {...exclude($$props, ['use', 'class', 'disabled', 'discrete', 'displayMarkers', 'min', 'max', 'step', 'value', 'tabindex'])}
>
  <div class="mdc-slider__track-container">
    <div class="mdc-slider__track"></div>
    {#if discrete && displayMarkers}
      <div class="mdc-slider__track-marker-container"></div>
    {/if}
  </div>
  <div class="mdc-slider__thumb-container">
    {#if discrete}
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker"></span>
      </div>
    {/if}
    <svg class="mdc-slider__thumb" width="21" height="21">
      <circle cx="10.5" cy="10.5" r="7.875"></circle>
    </svg>
    <div class="mdc-slider__focus-ring"></div>
  </div>
</div>

<script>
  import {MDCSlider} from '@material/slider';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCSlider:input', 'MDCSlider:change']);

  export let use = [];
  let className = '';
  export {className as class};
  export let disabled = false;
  export let discrete = false;
  export let displayMarkers = false;
  export let min = 0;
  export let max = 100;
  export let step = 0;
  export let value = null;
  export let tabindex = '0';

  let element;
  let slider;
  let formField = getContext('SMUI:formField');
  let incoming = getContext('SMUI:formField:props') || {};

  $: if (slider && slider.disabled !== disabled) {
    slider.disabled = disabled;
  }

  $: if (slider && slider.min !== min) {
    slider.min = min;
  }

  $: if (slider && slider.max !== max) {
    slider.max = max;
  }

  $: if (slider && slider.step !== step) {
    slider.step = step;
  }

  $: if (slider && slider.value !== value) {
    slider.value = value;
  }

  onMount(() => {
    slider = new MDCSlider(element);

    if (formField && formField()) {
      formField().input = slider;
    }
  });

  onDestroy(() => {
    slider.destroy();
  });

  function handleChange() {
    value = slider.value;
  }

  export function layout(...args) {
    return slider.layout(...args);
  }

  export function stepUp(amount = 1, ...args) {
    return slider.stepUp(amount, ...args);
  }

  export function stepDown(amount = 1, ...args) {
    return slider.stepDown(amount, ...args);
  }

  export function getId() {
    return incoming && incoming.id;
  }
</script>

<style lang="scss" global>
  @import "smui-theme";
  @import "@material/slider/mdc-slider";
</style>