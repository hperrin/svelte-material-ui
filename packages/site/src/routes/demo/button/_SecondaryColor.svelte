<div>
  <Button color="secondary" onclick={() => clicked++}>
    <Label>Default</Label>
  </Button>
  <Button color="secondary" onclick={() => clicked++} disabled>
    <Label>Disabled</Label>
  </Button>
  <Button color="secondary" onclick={() => clicked++} ripple={false}>
    <Label>No Ripple</Label>
  </Button>
  <Button color="secondary" onclick={() => clicked++} class="myClass">
    <Label>With a Class</Label>
  </Button>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label } from '@smui/button';

  let clicked = 0;
</script>

<style>
  * :global(.myClass) {
    font-style: italic;
  }
</style>
