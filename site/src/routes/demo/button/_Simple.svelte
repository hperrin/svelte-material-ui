<div>
  <Button on:click={() => clicked++}>
    <Label>Default</Label>
  </Button>
  <Button on:click={() => clicked++} disabled>
    <Label>Disabled</Label>
  </Button>
  <Button on:click={() => clicked++} ripple={false}>
    <Label>No Ripple</Label>
  </Button>
  <Button on:click={() => clicked++} variant="raised">
    <Label>Raised</Label>
  </Button>
  <Button on:click={() => clicked++} variant="unelevated">
    <Label>Unelevated</Label>
  </Button>
  <Button on:click={() => clicked++} variant="outlined">
    <Label>Outlined</Label>
  </Button>
  <!-- Notice that to target this class,
    you need to use a :global() selector. -->
  <Button on:click={() => clicked++} class="myClass">
    <Label>With a Class</Label>
  </Button>
  <Button on:click={() => clicked++} href="http://example.com" target="_blank">
    <Label>Link</Label>
  </Button>
</div>

<div>
  <Button on:click={() => clicked++}>
    <Icon class="material-icons">favorite</Icon>
    <Label>Icon</Label>
  </Button>
  <Button on:click={() => clicked++}>
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
  /* Accessing the class with "*" in front limits
    the scope to anything under this component's
    elements. */
  * :global(.myClass) {
    font-family: 'Roboto Mono', monospace !important;
  }
</style>
