<section>
  <h2>Icon Button</h2>

  <p>
    <IconButton on:click={() => clicked++}>build</IconButton>
    <IconButton on:click={() => clicked++} disabled>search</IconButton> (disabled)
    <IconButton on:click={() => clicked++} ripple={false}>add_shopping_cart</IconButton> (no ripple)
    <IconButton on:click={() => clicked++} toggle bind:pressed={initialOff}>
      <Icon on>star</Icon>
      <Icon>star_border</Icon>
    </IconButton>
    {initialOff ? '(on)' : '(off)'}
    <IconButton on:click={() => clicked++} toggle bind:pressed={initialOn}>
      <Icon on>alarm_on</Icon>
      <Icon>alarm_off</Icon>
    </IconButton>
    {initialOn ? '(on)' : '(off)'}
  </p>

  <p class="status">Clicked: {clicked}</p>
</section>

<script>
  import IconButton, {Icon} from '../components/icon-button';

  let clicked = 0;
  let initialOff = false;
  let initialOn = true;
</script>