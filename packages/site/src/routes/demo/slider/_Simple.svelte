<FormField align="end" style="display: flex;">
  <Slider style="flex-grow: 1;" bind:value />
  {#snippet label()}
    <span style="padding-inline-end: 12px; width: max-content; display: block;">
      Amount of Wonder
    </span>
  {/snippet}
</FormField>

{#if value == 0}
  <p>No wonder.</p>
{/if}

<div><Button onclick={() => (value = 100)}>Maximum Wonder!</Button></div>

<pre class="status">Value: {value}</pre>

<script lang="ts">
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let value = $state(50);
</script>
