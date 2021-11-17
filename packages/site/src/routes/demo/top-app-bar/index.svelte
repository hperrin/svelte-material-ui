<svelte:head>
  <title>Top App Bar - SMUI</title>
</svelte:head>

<section>
  <h2>Top App Bar</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/top-app-bar</pre>

  <h5>Demos</h5>

  <Demo component={Static} file="top-app-bar/_Static.svelte">
    Top app bars in a container
    <svelte:fragment slot="subtitle">
      Only the "static" variant works inside containers.
    </svelte:fragment>
  </Demo>

  <Demo
    component={Variants}
    files={[
      'top-app-bar/iframe/standard.svelte',
      'top-app-bar/iframe/fixed.svelte',
      'top-app-bar/iframe/dense.svelte',
      'top-app-bar/iframe/prominent.svelte',
      'top-app-bar/iframe/short.svelte',
      'top-app-bar/iframe/short-closed.svelte',
    ]}
  >
    Page level top app bars
    <svelte:fragment slot="subtitle">
      These are displayed in iframes and the source viewer shows the iframe
      source.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Static from './_Static.svelte';
  import Variants from './_Variants.svelte';
</script>
