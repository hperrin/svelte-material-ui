<div class="flexy">
  <div class="margins">
    <Fab on:click={() => clicked++} ripple={false}>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} ripple={false}>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <Fab on:click={() => clicked++} extended ripple={false}>
      <Icon class="material-icons">favorite</Icon>
      <Label>Extended</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" on:click={() => clicked++} extended ripple={false}>
      <Icon class="material-icons">favorite</Icon>
      <Label>Extended</Label>
    </Fab>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Fab, { Label, Icon } from '@smui/fab';

  let clicked = 0;
</script>
