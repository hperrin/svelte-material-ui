<svelte:head>
  <title>Slider - SMUI</title>
</svelte:head>

<section>
  <h2>Slider</h2>

  <div>
    <FormField align="end" style="display: flex;">
      <Slider style="flex-grow: 1;" bind:value />
      <span
        slot="label"
        style="padding-right: 12px; width: max-content; display: block;"
        >Amount of Wonder</span
      >
    </FormField>
  </div>

  <pre class="status">Value: {value}</pre>

  <div>
    <h6 class="demo-title">Continuous</h6>

    <Slider
      bind:value={valueContinuous}
      min={-10}
      max={10}
      step={0.001}
      input$aria-label="Continuous slider"
    />
  </div>

  <pre class="status">Value: {valueContinuous.toFixed(3)}</pre>

  <div>
    <h6 class="demo-title">Discrete with min/max/step</h6>

    <Slider
      bind:value={valueDiscrete}
      min={-10}
      max={10}
      step={2}
      discrete
      input$aria-label="Discrete slider"
    />
  </div>

  <pre class="status">Value: {valueDiscrete}</pre>

  <div>
    <h6 class="demo-title">Discrete with min/max/step and tick marks</h6>

    <Slider
      bind:value={valueSteps}
      min={-100}
      max={100}
      step={5}
      discrete
      tickMarks
      input$aria-label="Tick mark slider"
    />
  </div>

  <pre class="status">Value: {valueSteps}</pre>

  <div>
    <h6 class="demo-title">Range slider</h6>

    <Slider
      range
      bind:start={valueRangeStart}
      bind:end={valueRangeEnd}
      min={0}
      max={10}
      step={0.1}
      input$aria-label="Range slider"
    />
  </div>

  <pre
    class="status">Value: {valueRangeStart.toFixed(1)} - {valueRangeEnd.toFixed(1)}</pre>

  <div>
    <h6 class="demo-title">Disabled</h6>

    <Slider disabled value={5} />
  </div>
</section>

<script>
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  let value = 50;
  let valueContinuous = 0;
  let valueDiscrete = 0;
  let valueSteps = 0;
  let valueRangeStart = 1;
  let valueRangeEnd = 4;
</script>
