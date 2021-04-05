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
    Discrete with min/max/step:

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
    Discrete with min/max/step and tick marks:

    <Slider
      bind:value={valueSteps}
      min={-10}
      max={10}
      step={2}
      discrete
      tickMarks
      input$aria-label="Tick mark slider"
    />
  </div>

  <pre class="status">Value: {valueSteps}</pre>

  <div>
    Range slider:

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
</section>

<script>
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  let value = 50;
  let valueDiscrete = 0;
  let valueSteps = 0;
  let valueRangeStart = 1;
  let valueRangeEnd = 4;
</script>
