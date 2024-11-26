<FormField align="end">
  <Checkbox bind:checked />
  {#snippet label()}
    The input can be aligned at the end too.
  {/snippet}
</FormField>

<pre class="status">Checked: {checked ? 'Yes' : 'No'}</pre>

<script lang="ts">
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let checked = $state(false);
</script>
