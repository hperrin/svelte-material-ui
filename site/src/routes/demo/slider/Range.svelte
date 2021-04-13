<h6 class="demo-title">Range slider</h6>

<Slider
  range
  bind:start={valueStart}
  bind:end={valueEnd}
  min={0}
  max={10}
  step={0.1}
  input$aria-label="Range slider"
/>

<pre class="status">Value: {valueStart.toFixed(1)} - {valueEnd.toFixed(1)}</pre>

<script>
  import Slider from '@smui/slider';

  let valueStart = 1;
  let valueEnd = 4;
</script>
