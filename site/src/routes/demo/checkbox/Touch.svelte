<div>
  <h6 class="demo-title">Increased touch target</h6>

  <FormField>
    <Checkbox bind:checked touch />
    <span slot="label">Remember me.</span>
  </FormField>
</div>

<pre class="status">Checked: {checked}</pre>

<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let checked = false;
</script>
