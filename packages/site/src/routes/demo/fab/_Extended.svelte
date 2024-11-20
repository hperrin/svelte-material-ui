<svelte:options runes={false} />

<div class="flexy">
  <div class="margins">
    <Fab onclick={() => clicked++} extended>
      <Icon class="material-icons">favorite</Icon>
      <Label>Extended</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" onclick={() => clicked++} extended>
      <Icon class="material-icons">favorite</Icon>
      <Label>Extended</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab onclick={() => clicked++} extended>
      <Label>Extended W/o Icon</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" onclick={() => clicked++} extended>
      <Label>Extended W/o Icon</Label>
    </Fab>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Fab, { Label, Icon } from '@smui/fab';

  let clicked = 0;
</script>
