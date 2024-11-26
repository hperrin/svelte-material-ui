<div>
  <FormField>
    <Checkbox class="my-colored-checkbox" />
    {#snippet label()}
      Custom Color
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-colored-checkbox" disabled />
    {#snippet label()}
      Disabled
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-colored-checkbox" disabled checked />
    {#snippet label()}
      Disabled, Checked
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox
      class="my-colored-checkbox"
      bind:checked
      indeterminate={checked === null}
    />
    {#snippet label()}
      Indeterminate
    {/snippet}
  </FormField>
</div>

<br />
<Button onclick={() => (checked = null)}>Reset</Button>

<br /><br />
<div>
  <FormField>
    <Checkbox class="my-fully-colored-checkbox" />
    {#snippet label()}
      Fully Colored
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-fully-colored-checkbox" disabled />
    {#snippet label()}
      Disabled
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox class="my-fully-colored-checkbox" disabled checked />
    {#snippet label()}
      Disabled, Checked
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Checkbox
      class="my-fully-colored-checkbox"
      bind:checked={checked2}
      indeterminate={checked2 === null}
    />
    {#snippet label()}
      Indeterminate
    {/snippet}
  </FormField>
</div>

<br />
<Button onclick={() => (checked2 = null)}>Reset</Button>

<script lang="ts">
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let checked: boolean | null = $state(null);
  let checked2: boolean | null = $state(null);
</script>
