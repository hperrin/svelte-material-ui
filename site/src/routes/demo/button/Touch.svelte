<div>
  <h6 class="demo-title">Increased touch target</h6>
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
  <Button
    on:click={() => clicked++}
    touch
    href="http://example.com"
    target="_blank"
  >
    <Label>Link</Label>
  </Button>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Button, { Label } from '@smui/button';

  let clicked = 0;
</script>
