<Slider
  bind:value
  min={-10}
  max={10}
  step={0.001}
  input$aria-label="Continuous slider"
/>

<pre class="status">Value: {value}</pre>

<script lang="ts">
  import Slider from '@smui/slider';

  let value = 0;
</script>
