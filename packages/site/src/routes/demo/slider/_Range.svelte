<Slider
  range
  bind:start={valueStart}
  bind:end={valueEnd}
  min={0}
  max={10}
  step={0.1}
  input$aria-label="Range slider"
/>

<div>
  <Button
    on:click={() => {
      valueStart = 0;
      valueEnd = 10;
    }}>Maximum Range!</Button
  >
</div>

<pre class="status">Value: {valueStart} - {valueEnd}</pre>

<script lang="ts">
  import Slider from '@smui/slider';
  import Button from '@smui/button';

  let valueStart = 1;
  let valueEnd = 4;
</script>
