<div>
  <FormField>
    <Switch bind:checked onSMUISwitchChange={(e) => (event = e)} />
    <span slot="label">Fields of grain.</span>
  </FormField>
</div>

<div style="margin-top: 1em;">
  <Button onclick={() => (checked = !checked)}>Toggle Programmatically</Button>
  (Notice that this doesn't fire an event.)
</div>

<pre class="status">Checked: {checked}, Event: {event
    ? JSON.stringify(event.detail)
    : 'None yet.'}</pre>

<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let checked = $state(false);
  let event: CustomEvent | undefined = $state();
</script>
