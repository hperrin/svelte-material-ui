<svelte:head>
  <title>Tooltip - SMUI</title>
</svelte:head>

<section>
  <h2>Toolip</h2>
  <p>Or tooltip. I can't spell.</p>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/tooltip</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="tooltip/_Simple.svelte" />

  <Demo component={Positioning} file="tooltip/_Positioning.svelte">
    Positioning
    <svelte:fragment slot="subtitle">
      Tooltips position themselves automatically based on proximity to the
      viewport boundary, but you can give them a default position.
    </svelte:fragment>
  </Demo>

  <Demo component={Rich} file="tooltip/_Rich.svelte">Rich</Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Positioning from './_Positioning.svelte';
  import Rich from './_Rich.svelte';
</script>
