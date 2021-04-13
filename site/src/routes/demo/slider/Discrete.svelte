<h6 class="demo-title">Discrete with min/max/step</h6>

<Slider
  bind:value
  min={-10}
  max={10}
  step={2}
  discrete
  input$aria-label="Discrete slider"
/>

<pre class="status">Value: {value}</pre>

<script>
  import Slider from '@smui/slider';

  let value = 0;
</script>
