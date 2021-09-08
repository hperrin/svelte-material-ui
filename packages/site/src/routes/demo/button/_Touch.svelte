<Button on:click={() => clicked++} touch>
  <Label>Default</Label>
</Button>
<Button on:click={() => clicked++} touch variant="raised">
  <Label>Raised</Label>
</Button>
<Button on:click={() => clicked++} touch variant="unelevated">
  <Label>Unelevated</Label>
</Button>
<Button on:click={() => clicked++} touch variant="outlined">
  <Label>Outlined</Label>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label } from '@smui/button';

  let clicked = 0;
</script>
