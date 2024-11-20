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
    {#snippet subtitle()}
      Only the "static" variant works inside containers.
    {/snippet}
  </Demo>

  <Demo
    component={Variants}
    files={[
      'top-app-bar/iframe/standard/+page.svelte',
      'top-app-bar/iframe/fixed/+page.svelte',
      'top-app-bar/iframe/dense/+page.svelte',
      'top-app-bar/iframe/prominent/+page.svelte',
      'top-app-bar/iframe/short/+page.svelte',
      'top-app-bar/iframe/short-closed/+page.svelte',
    ]}
  >
    Page level top app bars
    {#snippet subtitle()}
      These are displayed in iframes and the source viewer shows the iframe
      source.
    {/snippet}
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Static from './_Static.svelte';
  import Variants from './_Variants.svelte';
</script>
