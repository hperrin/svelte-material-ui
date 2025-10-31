<Button onclick={() => clicked++}>
  <Icon class="material-icons">favorite</Icon>
  <Label>Leading Icon</Label>
</Button>
<Button onclick={() => clicked++}>
  <Label>Trailing Icon</Label>
  <Icon class="material-icons">favorite</Icon>
</Button>
<Button color="secondary" onclick={() => clicked++}>
  <Icon class="material-icons">favorite</Icon>
  <Label>Leading Icon</Label>
</Button>
<Button color="secondary" onclick={() => clicked++}>
  <Label>Trailing Icon</Label>
  <Icon class="material-icons">favorite</Icon>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label, Icon } from '@smui/button';

  let clicked = $state(0);
</script>
