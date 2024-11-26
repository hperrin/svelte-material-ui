<div>
  <FormField>
    <Switch class="my-colored-switch" />
    <span slot="label">Custom Color</span>
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-colored-switch" disabled />
    <span slot="label">Disabled</span>
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-colored-switch" disabled checked />
    <span slot="label">Disabled, Checked</span>
  </FormField>
</div>

<br /><br />
<div>
  <FormField>
    <Switch class="my-fully-colored-switch" />
    <span slot="label">Fully Colored</span>
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-fully-colored-switch" disabled />
    <span slot="label">Disabled</span>
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-fully-colored-switch" disabled checked />
    <span slot="label">Disabled, Checked</span>
  </FormField>
</div>

<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
</script>
