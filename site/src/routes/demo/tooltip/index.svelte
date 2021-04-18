<svelte:head>
  <title>Tooltip - SMUI</title>
</svelte:head>

<section>
  <h2>Toolip</h2>
  <p>Or tooltip. Whatever; I can't spell.</p>

  <pre class="demo-spaced">npm i -D @smui/tooltip</pre>

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

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Positioning from './_Positioning.svelte';
  import Rich from './_Rich.svelte';
</script>
