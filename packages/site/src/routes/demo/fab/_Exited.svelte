<div class="flexy">
  <div class="margins">
    <Fab onclick={() => clicked++} {exited}>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <FormField>
      <Checkbox bind:checked={exited} />
      {#snippet label()}
        Exited
      {/snippet}
    </FormField>
  </div>
</div>

<div class="flexy">
  <div class="margins">
    <Fab color="primary" onclick={() => clicked++} exited={exitedPrimary}>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <FormField>
      <Checkbox bind:checked={exitedPrimary} />
      {#snippet label()}
        Exited
      {/snippet}
    </FormField>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let clicked = $state(0);
  let exited = $state(false);
  let exitedPrimary = $state(false);
</script>
