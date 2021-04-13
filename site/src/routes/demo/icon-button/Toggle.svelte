<h6 class="demo-title">Toggle buttons</h6>

<div style="display: flex; align-items: center;">
  <IconButton on:click={() => toggleClicked++} toggle bind:pressed={initialOff}>
    <Icon class="material-icons" on>star</Icon>
    <Icon class="material-icons">star_border</Icon>
  </IconButton>
</div>
<div style="display: flex; align-items: center;">
  <IconButton on:click={() => toggleClicked++} toggle bind:pressed={initialOn}>
    <Icon class="material-icons" on>alarm_on</Icon>
    <Icon class="material-icons">alarm_off</Icon>
  </IconButton>
  <Button on:click={() => (initialOn = !initialOn)}>
    <Label>Toggle Programmatically</Label>
  </Button>
  &nbsp;(Note: this doesn't fire the&nbsp;
  <code>MDCIconButtonToggle:change</code> &nbsp;event.)
</div>
<div style="display: flex; align-items: center;">
  <IconButton
    on:click={() => toggleClicked++}
    on:click={() => (usingEvents = !usingEvents)}
    pressed={usingEvents}
  >
    <Icon class="material-icons" on>bookmark</Icon>
    <Icon class="material-icons">bookmark_border</Icon>
  </IconButton>
  Using events instead of bound variables. (Note: don't use&nbsp;
  <code>toggle</code> &nbsp;prop in this case.)
</div>

<pre class="status">Clicked: {toggleClicked}</pre>

<script>
  import IconButton, { Icon } from '@smui/icon-button';
  import Button, { Label } from '@smui/button';

  let toggleClicked = 0;
  let initialOff = false;
  let initialOn = true;
  let usingEvents = false;
</script>
