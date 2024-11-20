<svelte:options runes={false} />

<Button onclick={() => clicked++} variant="raised">
  <Label>Raised</Label>
</Button>
<Button onclick={() => clicked++} variant="unelevated">
  <Label>Unelevated</Label>
</Button>
<Button onclick={() => clicked++} variant="outlined">
  <Label>Outlined</Label>
</Button>
<Button color="secondary" onclick={() => clicked++} variant="raised">
  <Label>Raised</Label>
</Button>
<Button color="secondary" onclick={() => clicked++} variant="unelevated">
  <Label>Unelevated</Label>
</Button>
<Button color="secondary" onclick={() => clicked++} variant="outlined">
  <Label>Outlined</Label>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label } from '@smui/button';

  let clicked = 0;
</script>
