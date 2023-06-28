<div>
  <FormField>
    <Radio class="my-colored-radio" bind:group={selected} value="on" />
    <span slot="label">Custom</span>
  </FormField>
  <FormField>
    <Radio class="my-colored-radio" bind:group={selected} value="off" />
    <span slot="label">Color</span>
  </FormField>
</div>
<div>
  <FormField>
    <Radio class="my-colored-radio" disabled group="off" value="on" />
    <span slot="label">Disabled</span>
  </FormField>
  <FormField>
    <Radio class="my-colored-radio" disabled group="on" value="on" />
    <span slot="label">Checked</span>
  </FormField>
</div>

<br /><br />
<div>
  <FormField>
    <Radio class="my-fully-colored-radio" bind:group={selected2} value="on" />
    <span slot="label">Fully</span>
  </FormField>
  <FormField>
    <Radio class="my-fully-colored-radio" bind:group={selected2} value="off" />
    <span slot="label">Colored</span>
  </FormField>
</div>
<div>
  <FormField>
    <Radio class="my-fully-colored-radio" disabled group="off" value="on" />
    <span slot="label">Disabled</span>
  </FormField>
  <FormField>
    <Radio class="my-fully-colored-radio" disabled group="on" value="on" />
    <span slot="label">Checked</span>
  </FormField>
</div>

<script lang="ts">
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let selected = 'on';
  let selected2 = 'on';
</script>
