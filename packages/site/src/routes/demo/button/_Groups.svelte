<Group>
  <Button on:click={() => clicked++}><Label>One</Label></Button>
  <Button on:click={() => clicked++}><Label>Two</Label></Button>
  <Button on:click={() => clicked++}><Label>Three</Label></Button>
</Group>
<Group variant="raised">
  <Button on:click={() => clicked++} variant="raised">
    <Label>One</Label>
  </Button>
  <Button on:click={() => clicked++} variant="raised">
    <Label>Two</Label>
  </Button>
  <Button on:click={() => clicked++} variant="raised">
    <Label>Three</Label>
  </Button>
</Group>
<Group variant="unelevated">
  <Button on:click={() => clicked++} variant="unelevated">
    <Label>One</Label>
  </Button>
  <Button on:click={() => clicked++} variant="unelevated">
    <Label>Two</Label>
  </Button>
  <Button on:click={() => clicked++} variant="unelevated">
    <Label>Three</Label>
  </Button>
</Group>
<Group variant="outlined">
  <Button on:click={() => clicked++} variant="outlined">
    <Label>One</Label>
  </Button>
  <Button on:click={() => clicked++} variant="outlined">
    <Label>Two</Label>
  </Button>
  <Button on:click={() => clicked++} variant="outlined">
    <Label>Three</Label>
  </Button>
</Group>

<br /> <br />

<Group variant="unelevated" style="display: flex; justify-content: stretch;">
  <Button
    on:click={() => clicked++}
    variant="unelevated"
    color="primary"
    style="width: 60%;"
  >
    <Label>Primary</Label>
  </Button>
  <Button
    on:click={() => clicked++}
    variant="unelevated"
    color="secondary"
    style="flex-grow: 1;"
  >
    <Label>Secondary</Label>
  </Button>
  <Button
    on:click={() => clicked++}
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
