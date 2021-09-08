<svelte:head>
  <title>Top App Bar - SMUI</title>
</svelte:head>

<section>
  <h2>Top App Bar</h2>

  <pre class="demo-spaced">npm i -D @smui/top-app-bar</pre>

  <Demo component={Static} file="top-app-bar/_Static.svelte">
    Top app bars in a container
    <svelte:fragment slot="subtitle">
      Only the "static" variant works inside containers.
    </svelte:fragment>
  </Demo>

  <Demo component={Variants} file="top-app-bar/iframe.svelte">
    Page level top app bars
    <svelte:fragment slot="subtitle">
      These are displayed in iframes and the source viewer shows the iframe
      source.
    </svelte:fragment>
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Static from './_Static.svelte';
  import Variants from './_Variants.svelte';
</script>
