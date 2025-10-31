<div>
  <Button onclick={() => clicked++}>
    <Label>Default</Label>
  </Button>
  <Button onclick={() => clicked++} disabled>
    <Label>Disabled</Label>
  </Button>
  <Button onclick={() => clicked++} ripple={false}>
    <Label>No Ripple</Label>
  </Button>
  <!--
    Note: to target this class, you need to use
    a :global() selector. See the styles below.
  -->
  <Button onclick={() => clicked++} class="myClass">
    <Label>With a Class</Label>
  </Button>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label } from '@smui/button';

  let clicked = $state(0);
</script>

<style>
  /* Accessing the class with "*" in front limits
    the scope to anything under this component's
    elements. */
  * :global(.myClass) {
    font-style: italic;
  }
</style>
