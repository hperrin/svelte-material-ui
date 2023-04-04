<svelte:head>
  <title>Bottom App Bar - SMUI</title>
</svelte:head>

<section>
  <h2>Bottom App Bar</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui-extra/bottom-app-bar</pre>

  <h5>Use</h5>

  <p>
    Please note that the Material spec states "Bottom app bars should be used
    for mobile devices only".
  </p>

  <h5>Demos</h5>

  <Demo component={Static} file="bottom-app-bar/_Static.svelte">
    Bottom app bars in a container
    <svelte:fragment slot="subtitle">
      Only the "static" variant works inside containers.
    </svelte:fragment>
  </Demo>

  <Demo
    component={Variants}
    files={[
      'bottom-app-bar/iframe/standard/+page.svelte',
      'bottom-app-bar/iframe/fixed/+page.svelte',
    ]}
  >
    Page level bottom app bars
    <svelte:fragment slot="subtitle">
      These are displayed in iframes and the source viewer shows the iframe
      source.
    </svelte:fragment>
  </Demo>

  <Demo component={Fab} file="bottom-app-bar/_Fab.svelte">FABs</Demo>

  <Demo
    component={InsetFab}
    files={[
      'bottom-app-bar/iframe/inset-fab/+page.svelte',
      'bottom-app-bar/iframe/inset-fab-right/+page.svelte',
    ]}
  >
    Inset FAB
    <svelte:fragment slot="subtitle">
      These are displayed in iframes so that content will appear behind the
      inset.
    </svelte:fragment>
  </Demo>

  <Demo
    component={Snackbar}
    files={['bottom-app-bar/iframe/snackbar/+page.svelte']}
  >
    Snackbar positioning
    <svelte:fragment slot="subtitle">
      The snackbar is positioned above the bottom app bar. Note: to follow
      scrolling adjustments with the "standard" variant, this requires the
      AutoAdjust component.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Static from './_Static.svelte';
  import Variants from './_Variants.svelte';
  import Fab from './_Fab.svelte';
  import InsetFab from './_InsetFab.svelte';
  import Snackbar from './_Snackbar.svelte';
</script>
