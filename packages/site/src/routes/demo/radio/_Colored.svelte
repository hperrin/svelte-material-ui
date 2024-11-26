<div>
  <FormField>
    <Radio class="my-colored-radio" bind:group={selected} value="on" />
    {#snippet label()}
      Custom
    {/snippet}
  </FormField>
  <FormField>
    <Radio class="my-colored-radio" bind:group={selected} value="off" />
    {#snippet label()}
      Color
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Radio class="my-colored-radio" disabled group="off" value="on" />
    {#snippet label()}
      Disabled
    {/snippet}
  </FormField>
  <FormField>
    <Radio class="my-colored-radio" disabled group="on" value="on" />
    {#snippet label()}
      Checked
    {/snippet}
  </FormField>
</div>

<br /><br />
<div>
  <FormField>
    <Radio class="my-fully-colored-radio" bind:group={selected2} value="on" />
    {#snippet label()}
      Fully
    {/snippet}
  </FormField>
  <FormField>
    <Radio class="my-fully-colored-radio" bind:group={selected2} value="off" />
    {#snippet label()}
      Colored
    {/snippet}
  </FormField>
</div>
<div>
  <FormField>
    <Radio class="my-fully-colored-radio" disabled group="off" value="on" />
    {#snippet label()}
      Disabled
    {/snippet}
  </FormField>
  <FormField>
    <Radio class="my-fully-colored-radio" disabled group="on" value="on" />
    {#snippet label()}
      Checked
    {/snippet}
  </FormField>
</div>

<script lang="ts">
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let selected = $state('on');
  let selected2 = $state('on');
</script>
