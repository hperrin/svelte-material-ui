<Button on:click={() => clicked++}>
  <Icon class="material-icons">favorite</Icon>
  <Label>Leading Icon</Label>
</Button>
<Button on:click={() => clicked++}>
  <Label>Trailing Icon</Label>
  <Icon class="material-icons">favorite</Icon>
</Button>
<Button color="secondary" on:click={() => clicked++}>
  <Icon class="material-icons">favorite</Icon>
  <Label>Leading Icon</Label>
</Button>
<Button color="secondary" on:click={() => clicked++}>
  <Label>Trailing Icon</Label>
  <Icon class="material-icons">favorite</Icon>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label, Icon } from '@smui/button';

  let clicked = 0;
</script>
