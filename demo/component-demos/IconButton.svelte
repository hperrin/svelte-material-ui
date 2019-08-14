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
  <div style="display: flex; align-items: center;">
    <IconButton on:click={() => clicked++} toggle bind:pressed={initialOff}>
      <Icon class="material-icons" on>star</Icon>
      <Icon class="material-icons">star_border</Icon>
    </IconButton>
    {initialOff ? '(on)' : '(off)'}
  </div>
  <div style="display: flex; align-items: center;">
    <IconButton on:click={() => clicked++} toggle bind:pressed={initialOn}>
      <Icon class="material-icons" on>alarm_on</Icon>
      <Icon class="material-icons">alarm_off</Icon>
    </IconButton>
    {initialOn ? '(on)' : '(off)'}
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import IconButton, {Icon} from 'svelte-material-ui/components/icon-button';

  let clicked = 0;
  let initialOff = false;
  let initialOn = true;
</script>