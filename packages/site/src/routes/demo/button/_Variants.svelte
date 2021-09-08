<Button on:click={() => clicked++} variant="raised">
  <Label>Raised</Label>
</Button>
<Button on:click={() => clicked++} variant="unelevated">
  <Label>Unelevated</Label>
</Button>
<Button on:click={() => clicked++} variant="outlined">
  <Label>Outlined</Label>
</Button>
<Button color="secondary" on:click={() => clicked++} variant="raised">
  <Label>Raised</Label>
</Button>
<Button color="secondary" on:click={() => clicked++} variant="unelevated">
  <Label>Unelevated</Label>
</Button>
<Button color="secondary" on:click={() => clicked++} variant="outlined">
  <Label>Outlined</Label>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label } from '@smui/button';

  let clicked = 0;
</script>
