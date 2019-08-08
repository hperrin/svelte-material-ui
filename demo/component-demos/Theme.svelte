<section class="themed">
  <h2>Theme</h2>

  <p>
    SMUI themes are usually provided by a <code>_smui-theme.scss</code> file in
    a directory that is included in the <code>scss.includePaths</code> property
    passed to <code>svelte-preprocess</code>. That file is mandatory, but it can
    contain nothing, if you want the default theme. This demo shows how to theme
    a portion of the app differently.
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
    <Button on:click={() => clicked++}><Icon style="margin-right: 12px;">favorite</Icon><Label>Icon</Label></Button>
  </div>

  <div>
    <Fab on:click={() => clicked++}><Icon>favorite</Icon></Fab>
    <Fab on:click={() => clicked++} mini><Icon>favorite</Icon></Fab>
    <Fab on:click={() => clicked++} extended><Icon style="margin-right: 12px;">favorite</Icon><Label>Extended</Label></Fab>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import Button from 'svelte-material-ui/components/button';
  import Fab from 'svelte-material-ui/components/fab';
  import {Label, Icon} from 'svelte-material-ui/components/common';

  let clicked = 0;
</script>

<style lang="scss" global>
  .themed {
    min-height: 100%;
    min-width: 100%;
    background-color: #000;
    color: #fff;

    @import "@material/theme/color-palette";

    $mdc-theme-primary: $material-color-purple-50;
    $mdc-theme-secondary: $material-color-cyan-50;
    $mdc-theme-background: #000;
    $mdc-theme-surface: #000;
    $mdc-theme-error: $material-color-orange-50;

    @import "@material/button/mdc-button";
    @import "@material/fab/mdc-fab";
  }
</style>