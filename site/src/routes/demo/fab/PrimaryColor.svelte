<h6 class="demo-title">Primary color</h6>

<div class="flexy">
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++}>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} mini>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} extended>
      <Icon class="material-icons">favorite</Icon>
      <Label>Extended</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} extended ripple={false}>
      <Icon class="material-icons">favorite</Icon>
      <Label>No Ripple</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} extended>
      <Label>Extended W/o Icon</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab
      color="primary"
      on:click={() => clicked++}
      href="http://example.com"
      target="_blank"
      extended
    >
      <Label>Link</Label>
    </Fab>
  </div>
</div>

<div class="flexy">
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} {exited}>
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

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Fab, { Label, Icon } from '@smui/fab';
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let clicked = 0;
  let exited = false;
</script>

<style>
  .flexy {
    display: flex;
    align-items: center;
  }

  .margins {
    margin: 0 0.4em 0.4em 0;
  }
</style>
