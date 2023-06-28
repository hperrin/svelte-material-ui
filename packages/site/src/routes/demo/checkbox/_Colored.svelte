<div>
  <FormField>
    <Checkbox class="my-colored-checkbox" />
    <span slot="label">Custom Color</span>
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-colored-checkbox" disabled />
    <span slot="label">Disabled</span>
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-colored-checkbox" disabled checked />
    <span slot="label">Disabled, Checked</span>
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox
      class="my-colored-checkbox"
      bind:checked
      indeterminate={checked === null}
    />
    <span slot="label">Indeterminate</span>
  </FormField>
</div>

<br />
<Button on:click={() => (checked = null)}>Reset</Button>

<br /><br />
<div>
  <FormField>
    <Checkbox class="my-fully-colored-checkbox" />
    <span slot="label">Fully Colored</span>
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-fully-colored-checkbox" disabled />
    <span slot="label">Disabled</span>
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-fully-colored-checkbox" disabled checked />
    <span slot="label">Disabled, Checked</span>
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox
      class="my-fully-colored-checkbox"
      bind:checked={checked2}
      indeterminate={checked2 === null}
    />
    <span slot="label">Indeterminate</span>
  </FormField>
</div>

<br />
<Button on:click={() => (checked2 = null)}>Reset</Button>

<script lang="ts">
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let checked: boolean | null = null;
  let checked2: boolean | null = null;
</script>
