<section class="themed">
  <h2>Theme</h2>

  <p>
    SMUI themes are usually provided by a <code>_smui-theme.scss</code> file in
    a directory that is included in the <code>includePaths</code> of your Sass
    config. That file is mandatory, but it can contain nothing, if you want the
    default theme. This demo shows how to theme a portion of the app
    differently.
  </p>

  <div>
    <Button on:click={() => clicked++}><Label>Default</Label></Button>
    <!-- <Button on:click={() => clicked++} color="primary"><Label>Primary</Label></Button>
    <Button on:click={() => clicked++} color="secondary"><Label>Secondary</Label></Button> -->
    <Button on:click={() => clicked++} disabled><Label>Disabled</Label></Button>
    <Button on:click={() => clicked++} variant="raised"><Label>Raised</Label></Button>
    <Button on:click={() => clicked++} variant="unelevated"><Label>Unelevated</Label></Button>
    <Button on:click={() => clicked++} variant="outlined"><Label>Outlined</Label></Button>
    <Button on:click={() => clicked++} dense><Label>Dense</Label></Button>
    <Button on:click={() => clicked++}><Icon class="material-icons" style="margin-right: 12px;">favorite</Icon><Label>Icon</Label></Button>
  </div>

  <div>
    <Fab on:click={() => clicked++}><Icon class="material-icons">favorite</Icon></Fab>
    <Fab on:click={() => clicked++} mini><Icon class="material-icons">favorite</Icon></Fab>
    <Fab on:click={() => clicked++} extended><Icon class="material-icons" style="margin-right: 12px;">favorite</Icon><Label>Extended</Label></Fab>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import Button from 'svelte-material-ui/components/button/Button.svelte';
  import Fab from 'svelte-material-ui/components/fab/Fab.svelte';
  import {Label, Icon} from 'svelte-material-ui/components/common';
  import './Theme.scss';

  let clicked = 0;
</script>