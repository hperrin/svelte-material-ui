<FormField>
  <Checkbox bind:checked />
  {#snippet label()}
    Form fields let you click the label to toggle or focus the form control.
  {/snippet}
</FormField>

<pre class="status">Checked: {checked ? 'Yes' : 'No'}</pre>

<script lang="ts">
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let checked = $state(false);
</script>
