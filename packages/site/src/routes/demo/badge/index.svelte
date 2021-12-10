<svelte:head>
  <title>Badge - SMUI</title>
</svelte:head>

<section>
  <h2>Badge</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui-extra/badge</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="paper/_Simple.svelte" />

  <Demo component={Square} file="paper/_Square.svelte">Square badge</Demo>

  <Demo component={SecondaryColor} file="paper/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo
    component={CustomColor}
    files={['paper/_CustomColor.svelte', 'paper/_CustomColor.scss']}
  >
    Custom color
  </Demo>

  <Demo component={PositionAlign} file="paper/_PositionAlign.svelte">
    Positioning and Alignment
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Square from './_Square.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import CustomColor from './_CustomColor.svelte';
  import PositionAlign from './_PositionAlign.svelte';
</script>
