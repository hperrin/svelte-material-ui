<FormField>
  <Checkbox bind:checked touch />
  {#snippet label()}
    Remember me.
  {/snippet}
</FormField>

<pre class="status">Checked: {checked}</pre>

<script lang="ts">
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let checked = $state(false);
</script>
