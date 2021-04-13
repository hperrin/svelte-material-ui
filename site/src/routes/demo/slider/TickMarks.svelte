<h6 class="demo-title">Discrete with min/max/step and tick marks</h6>

<Slider
  bind:value
  min={-100}
  max={100}
  step={5}
  discrete
  tickMarks
  input$aria-label="Tick mark slider"
/>

<pre class="status">Value: {value}</pre>

<script>
  import Slider from '@smui/slider';

  let value = 0;
</script>
