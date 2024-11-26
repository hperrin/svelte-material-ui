{#each ['yes', 'no'] as option}
  <FormField style="margin-right: 1em;">
    <Radio bind:group={selected} value={option} />
    {#snippet label()}
      {`${option[0].toUpperCase()}${option.slice(1)}`}
    {/snippet}
  </FormField>
{/each}

<pre class="status">Selected: {selected}</pre>

<script lang="ts">
  import FormField from '@smui/form-field';
  import Radio from '@smui/radio';

  let selected = $state('yes');
</script>
