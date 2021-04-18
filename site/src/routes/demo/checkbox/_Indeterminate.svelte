<FormField>
  <!--
    Note: binding to `indeterminate` is probably a bad idea.
    The component will never set `indeterminate` internally.
  -->
  <Checkbox bind:checked indeterminate={checked === null} input$required />
  <span slot="label">I agree to the terms.</span>
</FormField>

<br />
<Button on:click={() => (checked = null)}>Reset</Button>

<pre class="status">Checked: {checked}</pre>

<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let checked = null;
</script>
