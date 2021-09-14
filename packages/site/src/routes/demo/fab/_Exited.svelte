<div class="flexy">
  <div class="margins">
    <Fab on:click={() => clicked++} {exited}>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <FormField>
      <Checkbox bind:checked={exited} />
      <span slot="label">Exited</span>
    </FormField>
  </div>
</div>

<div class="flexy">
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} exited={exitedPrimary}>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <FormField>
      <Checkbox bind:checked={exitedPrimary} />
      <span slot="label">Exited</span>
    </FormField>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let clicked = 0;
  let exited = false;
  let exitedPrimary = false;
</script>
