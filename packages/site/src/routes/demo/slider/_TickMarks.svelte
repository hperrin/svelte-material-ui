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

<script lang="ts">
  import Slider from '@smui/slider';

  let value = 0;
</script>
