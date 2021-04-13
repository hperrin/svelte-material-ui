<div>
  <h6 class="demo-title">Creating notched buttons with vanilla Sass</h6>
  <Button
    on:click={() => clicked++}
    variant="raised"
    class="button-shaped-notch"
  >
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
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import './Notched.scss';
  import Button, { Label, Icon } from '@smui/button';

  let clicked = 0;
</script>
