<section>
  <h2>Floating Action Button</h2>

  <p>
    <Fab on:click={() => clicked++}><Icon>favorite</Icon></Fab>
    <Fab on:click={() => clicked++} mini><Icon>favorite</Icon></Fab>
    <Fab on:click={() => clicked++} extended><Icon style="margin-right: 12px;">favorite</Icon><Label>Extended</Label></Fab>
    <Fab on:click={() => clicked++} extended ripple={false}><Icon style="margin-right: 12px;">favorite</Icon><Label>No Ripple</Label></Fab>
    <Fab on:click={() => clicked++} extended><Label>Extended W/o Icon</Label></Fab>
  </p>

  <p>
    <Fab on:click={() => clicked++} exited={exited}><Icon>favorite</Icon></Fab>
    <label><input type="checkbox" bind:checked={exited}> Exited</label>
  </p>

  <p class="status">Clicked: {clicked}</p>
</section>

<script>
  import Fab, {Label, Icon} from '../components/fab';

  let clicked = 0;
  let exited = false;
</script>