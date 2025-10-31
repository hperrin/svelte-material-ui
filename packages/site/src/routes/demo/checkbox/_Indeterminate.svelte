<FormField>
  <!--
    Note: binding to `indeterminate` is probably a bad idea.
    The component will set `indeterminate`, but it should be
    always related to `checked`.

    `indeterminate` is required for the correct state, even
    if `checked` is null.
  -->
  <Checkbox bind:checked indeterminate={checked === null} input$required />
  {#snippet label()}
    I agree to the terms.
  {/snippet}
</FormField>

<br />
<Button onclick={() => (checked = null)}>Reset</Button>

<pre class="status">Checked: {checked ?? 'indeterminate'}</pre>

<script lang="ts">
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let checked: boolean | null = $state(null);
</script>
