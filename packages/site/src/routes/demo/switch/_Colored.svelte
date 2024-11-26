<div>
  <FormField>
    <Switch class="my-colored-switch" />
    {#snippet label()}
      Custom Color
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-colored-switch" disabled />
    {#snippet label()}
      Disabled
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-colored-switch" disabled checked />
    {#snippet label()}
      Disabled, Checked
    {/snippet}
  </FormField>
</div>

<br /><br />
<div>
  <FormField>
    <Switch class="my-fully-colored-switch" />
    {#snippet label()}
      Fully Colored
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-fully-colored-switch" disabled />
    {#snippet label()}
      Disabled
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Switch class="my-fully-colored-switch" disabled checked />
    {#snippet label()}
      Disabled, Checked
    {/snippet}
  </FormField>
</div>

<script lang="ts">
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
</script>
