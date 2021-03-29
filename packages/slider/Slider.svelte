<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-slider
    {className}
    {discrete
    ? 'mdc-slider--discrete'
    : ''}
    {discrete && displayMarkers
    ? 'mdc-slider--display-markers'
    : ''}
  "
  role="slider"
  aria-disabled={disabled ? 'true' : 'false'}
  aria-valuemin={min}
  aria-valuemax={max}
  aria-valuenow={value}
  {...step === 0 ? {} : { 'data-step': step }}
  {tabindex}
  {...inputProps}
  on:MDCSlider:input={handleChange}
  {...exclude($$props, [
    'use',
    'class',
    'disabled',
    'discrete',
    'displayMarkers',
    'min',
    'max',
    'step',
    'value',
    'tabindex',
  ])}
>
  <div class="mdc-slider__track-container">
    <div class="mdc-slider__track" />
    {#if discrete && displayMarkers}
      <div class="mdc-slider__track-marker-container" />
    {/if}
  </div>
  <div class="mdc-slider__thumb-container">
    {#if discrete}
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker" />
      </div>
    {/if}
    <svg class="mdc-slider__thumb" width="21" height="21">
      <circle cx="10.5" cy="10.5" r="7.875" />
    </svg>
    <div class="mdc-slider__focus-ring" />
  </div>
</div>

<script>
  import { MDCSlider } from '@material/slider';
  import {
    onMount,
    onDestroy,
    getContext,
    createEventDispatcher,
  } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher(), [
    'MDCSlider:input',
    'MDCSlider:change',
  ]);

  export let use = [];
  let className = '';
  export { className as class };
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
  let formField = getContext('SMUI:form-field');
  let inputProps = getContext('SMUI:generic:input:props') || {};
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  $: if (slider && $formField && $formField.input !== slider) {
    $formField.input = slider;
  }

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

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(() => {
    slider = new MDCSlider(element);
  });

  onDestroy(() => {
    slider && slider.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
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
    return inputProps && inputProps.id;
  }
</script>
