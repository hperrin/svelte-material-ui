<svelte:head>
  <title>Theme - SMUI</title>
</svelte:head>

<section class="demo-special-theme">
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
    <Button on:click={() => clicked++} color="secondary"><Label>Secondary</Label></Button>
    <Button on:click={() => clicked++} disabled><Label>Disabled</Label></Button>
    <Button on:click={() => clicked++} variant="raised"><Label>Raised</Label></Button>
    <Button on:click={() => clicked++} variant="unelevated"><Label>Unelevated</Label></Button>
    <Button on:click={() => clicked++} variant="outlined"><Label>Outlined</Label></Button>
    <Button on:click={() => clicked++} dense><Label>Dense</Label></Button>
    <Button on:click={() => clicked++}><Icon class="material-icons">favorite</Icon><Label>Icon</Label></Button>
  </div>

  <div>
    <Fab on:click={() => clicked++}><Icon class="material-icons">favorite</Icon></Fab>
    <Fab on:click={() => clicked++} color="primary"><Icon class="material-icons">favorite</Icon></Fab>
    <Fab on:click={() => clicked++} mini><Icon class="material-icons">favorite</Icon></Fab>
    <Fab on:click={() => clicked++} extended><Icon class="material-icons">favorite</Icon><Label>Extended</Label></Fab>
  </div>

  <pre class="status">Clicked: {clicked}</pre>
</section>

<script>
  import './theme.scss';
  import Button from '@smui/button/Button.svelte';
  import Fab from '@smui/fab/Fab.svelte';
  import {Label, Icon} from '@smui/common';

  let clicked = 0;
</script>

<style>
  * :global(.mdc-button, .mdc-fab) {
    margin-bottom: .4em;
  }
</style>