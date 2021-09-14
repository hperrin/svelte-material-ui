<div class="radio-demo">
  {#each ['On', 'Off'] as option}
    <FormField>
      <Radio bind:group={onoff} value={option} touch />
      <span slot="label">{option}</span>
    </FormField>
  {/each}
</div>

<pre class="status">Selected: {onoff}</pre>

<script lang="ts">
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let onoff = 'On';
</script>

<style>
  .radio-demo > :global(*) {
    margin: 0 0.2em;
  }
</style>
