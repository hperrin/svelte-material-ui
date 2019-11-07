<svelte:head>
  <title>Icon Button - SMUI</title>
</svelte:head>

<section>
  <h2>Icon Button</h2>

  <div style="display: flex; align-items: center;">
    <IconButton class="material-icons" on:click={() => clicked++}>build</IconButton>
  </div>
  <div style="display: flex; align-items: center;">
    <IconButton class="material-icons" on:click={() => clicked++} disabled>search</IconButton> (disabled)
  </div>
  <div style="display: flex; align-items: center;">
    <IconButton class="material-icons" on:click={() => clicked++} ripple={false}>add_shopping_cart</IconButton> (no ripple)
  </div>

  Toggle buttons:
  <div style="display: flex; align-items: center;">
    <IconButton on:click={() => clicked++} toggle bind:pressed={initialOff}>
      <Icon class="material-icons" on>star</Icon>
      <Icon class="material-icons">star_border</Icon>
    </IconButton>
  </div>
  <div style="display: flex; align-items: center;">
    <IconButton on:click={() => clicked++} toggle bind:pressed={initialOn}>
      <Icon class="material-icons" on>alarm_on</Icon>
      <Icon class="material-icons">alarm_off</Icon>
    </IconButton>
    <Button on:click={() => initialOn = !initialOn}><Label>Toggle Programmatically</Label></Button>
  </div>
  <div style="display: flex; align-items: center;">
    <IconButton on:click={() => clicked++} on:click={() => usingEvents = !usingEvents} pressed={usingEvents}>
      <Icon class="material-icons" on>bookmark</Icon>
      <Icon class="material-icons">bookmark_border</Icon>
    </IconButton>
    (Using events instead of bound variables. Note: don't use&nbsp;<code>toggle</code>&nbsp;prop in this case.)
  </div>

  <pre class="status">Clicked: {clicked}</pre>
</section>

<script>
  import IconButton, {Icon} from '@smui/icon-button';
  import Button, {Label} from '@smui/button';

  let clicked = 0;
  let initialOff = false;
  let initialOn = true;
  let usingEvents = false;
</script>