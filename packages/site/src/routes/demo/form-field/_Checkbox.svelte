<FormField>
  <Checkbox bind:checked />
  <span slot="label">
    Form fields let you click the label to toggle or focus the form control.
  </span>
</FormField>

<pre class="status">Checked: {checked ? 'Yes' : 'No'}</pre>

<script lang="ts">
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let checked = false;
</script>
