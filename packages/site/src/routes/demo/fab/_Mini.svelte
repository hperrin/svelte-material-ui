<svelte:options runes={false} />

<div class="flexy">
  <div class="margins">
    <Fab onclick={() => clicked++} mini>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <Fab color="primary" onclick={() => clicked++} mini>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Fab, { Icon } from '@smui/fab';

  let clicked = 0;
</script>
