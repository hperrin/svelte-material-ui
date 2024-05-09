<div class="flexy">
  <div class="margins">
    <Fab onclick={() => clicked++} href="http://example.com" target="_blank">
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <Fab
      color="primary"
      onclick={() => clicked++}
      href="http://example.com"
      target="_blank"
    >
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </div>
  <div class="margins">
    <Fab
      onclick={() => clicked++}
      href="http://example.com"
      target="_blank"
      extended
    >
      <Label>Link</Label>
    </Fab>
  </div>
  <div class="margins">
    <Fab
      color="primary"
      onclick={() => clicked++}
      href="http://example.com"
      target="_blank"
      extended
    >
      <Label>Link</Label>
    </Fab>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Fab, { Label, Icon } from '@smui/fab';

  let clicked = 0;
</script>
