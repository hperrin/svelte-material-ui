<Button on:click={() => clicked++} variant="raised" class="button-shaped-notch">
  <Label>Raised</Label>
</Button>
<Button
  on:click={() => clicked++}
  variant="unelevated"
  class="button-shaped-notch"
>
  <Label>Unelevated</Label>
</Button>
<Button
  on:click={() => clicked++}
  variant="unelevated"
  class="button-shaped-notch"
>
  <Icon class="material-icons">favorite</Icon>
  <Label>Icon</Label>
</Button>
<Button
  on:click={() => clicked++}
  variant="unelevated"
  class="button-shaped-notch"
>
  <Label>Trailing Icon</Label>
  <Icon class="material-icons">favorite</Icon>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label, Icon } from '@smui/button';

  let clicked = 0;
</script>
