<Slider
  range
  bind:start={valueStart}
  bind:end={valueEnd}
  min={0}
  max={10}
  step={0.1}
  minRange={1}
  input$aria-label="Min range slider"
/>

<pre class="status">Value: {valueStart} - {valueEnd}</pre>

<script lang="ts">
  import Slider from '@smui/slider';

  let valueStart = 1;
  let valueEnd = 4;
</script>
