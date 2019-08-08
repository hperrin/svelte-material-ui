<section>
  <h2>Floating Action Button</h2>

  <div>
    <Fab on:click={() => clicked++}><Icon>favorite</Icon></Fab>
    <Fab on:click={() => clicked++} mini><Icon>favorite</Icon></Fab>
    <Fab on:click={() => clicked++} extended><Icon style="margin-right: 12px;">favorite</Icon><Label>Extended</Label></Fab>
    <Fab on:click={() => clicked++} extended ripple={false}><Icon style="margin-right: 12px;">favorite</Icon><Label>No Ripple</Label></Fab>
    <Fab on:click={() => clicked++} extended><Label>Extended W/o Icon</Label></Fab>
  </div>

  <div>
    <Fab on:click={() => clicked++} exited={exited}><Icon>favorite</Icon></Fab>
    <label><input type="checkbox" bind:checked={exited}> Exited</label>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import Fab, {Label, Icon} from 'svelte-material-ui/components/fab';

  let clicked = 0;
  let exited = false;
</script>