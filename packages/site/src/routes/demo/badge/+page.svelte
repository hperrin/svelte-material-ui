<svelte:head>
  <title>Badge - SMUI</title>
</svelte:head>

<section>
  <h2>Badge</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui-extra/badge</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="badge/_Simple.svelte" />

  <Demo component={Square} file="badge/_Square.svelte">Square badge</Demo>

  <Demo component={SecondaryColor} file="badge/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo
    component={Colored}
    files={['badge/_Colored.svelte', 'badge/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>

  <Demo component={PositionAlign} file="badge/_PositionAlign.svelte">
    Positioning and Alignment
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Square from './_Square.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Colored from './_Colored.svelte';
  import PositionAlign from './_PositionAlign.svelte';
</script>
