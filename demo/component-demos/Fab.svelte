<section>
  <h2>Floating Action Button</h2>

  <div>
    <Fab on:click={() => clicked++}><Icon class="material-icons">favorite</Icon></Fab>
    <Fab on:click={() => clicked++} mini><Icon class="material-icons">favorite</Icon></Fab>
    <Fab on:click={() => clicked++} extended><Icon class="material-icons" style="margin-right: 12px;">favorite</Icon><Label>Extended</Label></Fab>
    <Fab on:click={() => clicked++} extended ripple={false}><Icon class="material-icons" style="margin-right: 12px;">favorite</Icon><Label>No Ripple</Label></Fab>
    <Fab on:click={() => clicked++} extended><Label>Extended W/o Icon</Label></Fab>
  </div>

  <div>
    <Fab on:click={() => clicked++} exited={exited}><Icon class="material-icons">favorite</Icon></Fab>
    <label><input type="checkbox" bind:checked={exited}> Exited</label>
  </div>

  <div>
    Primary color: <br />
    <Fab color="primary" on:click={() => clicked++}><Icon class="material-icons">favorite</Icon></Fab>
    <Fab color="primary" on:click={() => clicked++} mini><Icon class="material-icons">favorite</Icon></Fab>
    <Fab color="primary" on:click={() => clicked++} extended><Icon class="material-icons" style="margin-right: 12px;">favorite</Icon><Label>Extended</Label></Fab>
    <Fab color="primary" on:click={() => clicked++} extended ripple={false}><Icon class="material-icons" style="margin-right: 12px;">favorite</Icon><Label>No Ripple</Label></Fab>
    <Fab color="primary" on:click={() => clicked++} extended><Label>Extended W/o Icon</Label></Fab>
  </div>

  <div>
    <Fab color="primary" on:click={() => clicked++} exited={exited2}><Icon class="material-icons">favorite</Icon></Fab>
    <label><input type="checkbox" bind:checked={exited2}> Exited</label>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import Fab, {Label, Icon} from 'svelte-material-ui/components/fab';

  let clicked = 0;
  let exited = false;
  let exited2 = false;
</script>