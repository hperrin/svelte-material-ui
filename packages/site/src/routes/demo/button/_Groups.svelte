<svelte:options runes={false} />

<Group>
  <Button onclick={() => clicked++}><Label>One</Label></Button>
  <Button onclick={() => clicked++}><Label>Two</Label></Button>
  <Button onclick={() => clicked++}><Label>Three</Label></Button>
</Group>
<Group variant="raised">
  <Button onclick={() => clicked++} variant="raised">
    <Label>One</Label>
  </Button>
  <Button onclick={() => clicked++} variant="raised">
    <Label>Two</Label>
  </Button>
  <Button onclick={() => clicked++} variant="raised">
    <Label>Three</Label>
  </Button>
</Group>
<Group variant="unelevated">
  <Button onclick={() => clicked++} variant="unelevated">
    <Label>One</Label>
  </Button>
  <Button onclick={() => clicked++} variant="unelevated">
    <Label>Two</Label>
  </Button>
  <Button onclick={() => clicked++} variant="unelevated">
    <Label>Three</Label>
  </Button>
</Group>
<Group variant="outlined">
  <Button onclick={() => clicked++} variant="outlined">
    <Label>One</Label>
  </Button>
  <Button onclick={() => clicked++} variant="outlined">
    <Label>Two</Label>
  </Button>
  <Button onclick={() => clicked++} variant="outlined">
    <Label>Three</Label>
  </Button>
</Group>

<br /> <br />

<Group variant="unelevated" style="display: flex; justify-content: stretch;">
  <Button
    onclick={() => clicked++}
    variant="unelevated"
    color="primary"
    style="width: 60%;"
  >
    <Label>Primary</Label>
  </Button>
  <Button
    onclick={() => clicked++}
    variant="unelevated"
    color="secondary"
    style="flex-grow: 1;"
  >
    <Label>Secondary</Label>
  </Button>
  <Button
    onclick={() => clicked++}
    variant="unelevated"
    color="secondary"
    style="flex-grow: 1;"
  >
    <Label>Secondary</Label>
  </Button>
</Group>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Group, Label } from '@smui/button';

  let clicked = 0;
</script>
