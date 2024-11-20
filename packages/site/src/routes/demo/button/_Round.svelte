<svelte:options runes={false} />

<Button onclick={() => clicked++} variant="raised" class="button-shaped-round">
  <Label>Raised</Label>
</Button>
<Button
  onclick={() => clicked++}
  variant="unelevated"
  class="button-shaped-round"
>
  <Label>Unelevated</Label>
</Button>
<Button
  onclick={() => clicked++}
  variant="outlined"
  class="button-shaped-round"
>
  <Label>Outlined</Label>
</Button>
<Button
  onclick={() => clicked++}
  variant="unelevated"
  class="button-shaped-round"
>
  <Icon class="material-icons">favorite</Icon>
  <Label>Icon</Label>
</Button>
<Button
  onclick={() => clicked++}
  variant="outlined"
  class="button-shaped-round"
>
  <Label>Trailing Icon</Label>
  <Icon class="material-icons">favorite</Icon>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label, Icon } from '@smui/button';

  let clicked = 0;
</script>
