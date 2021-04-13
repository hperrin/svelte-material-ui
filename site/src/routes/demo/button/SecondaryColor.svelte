<div>
  <h6 class="demo-title">Secondary color</h6>
  <Button color="secondary" on:click={() => clicked++}>
    <Label>Default</Label>
  </Button>
  <Button color="secondary" on:click={() => clicked++} disabled>
    <Label>Disabled</Label>
  </Button>
  <Button color="secondary" on:click={() => clicked++} ripple={false}>
    <Label>No Ripple</Label>
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
  <Button color="secondary" on:click={() => clicked++} class="myClass">
    <Label>With a Class</Label>
  </Button>
  <Button
    color="secondary"
    on:click={() => clicked++}
    href="http://example.com"
    target="_blank"
  >
    <Label>Link</Label>
  </Button>
</div>

<div>
  <Button color="secondary" on:click={() => clicked++}>
    <Icon class="material-icons">favorite</Icon>
    <Label>Icon</Label>
  </Button>
  <Button color="secondary" on:click={() => clicked++}>
    <Label>Trailing Icon</Label>
    <Icon class="material-icons">favorite</Icon>
  </Button>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Button, { Label, Icon } from '@smui/button';

  let clicked = 0;
</script>

<style>
  * :global(.myClass) {
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
