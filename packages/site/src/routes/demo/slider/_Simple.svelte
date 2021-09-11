<FormField align="end" style="display: flex;">
  <Slider style="flex-grow: 1;" bind:value />
  <span
    slot="label"
    style="padding-right: 12px; width: max-content; display: block;"
  >
    Amount of Wonder
  </span>
</FormField>

{#if value == 0}
  <p>No wonder.</p>
{/if}

<div><Button on:click={() => (value = 100)}>Maximum Wonder!</Button></div>

<pre class="status">Value: {value}</pre>

<script lang="ts">
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let value = 50;
</script>
