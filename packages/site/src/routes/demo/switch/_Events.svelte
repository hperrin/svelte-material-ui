<div>
  <FormField>
    <Switch bind:checked on:SMUISwitch:change={(e) => (event = e)} />
    <span slot="label">Fields of grain.</span>
  </FormField>
</div>

<div style="margin-top: 1em;">
  <Button on:click={() => (checked = !checked)}>Toggle Programmatically</Button>
  (Notice that this doesn't fire an event.)
</div>

<pre class="status">Checked: {checked}, Event: {event
    ? JSON.stringify(event.detail)
    : 'None yet.'}</pre>

<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let checked = false;
  let event: CustomEvent | undefined = undefined;
</script>
