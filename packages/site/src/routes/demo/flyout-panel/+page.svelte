<svelte:head>
  <title>Flyout Panel - SMUI</title>
</svelte:head>

<section>
  <h2>Flyout Panel</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/flyout-panel</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="flyout-panel/_Simple.svelte" />

  <Demo component={Sticky} file="flyout-panel/_Sticky.svelte">
    Sticky positioning
  </Demo>

  <Demo component={Fixed} file="flyout-panel/_Fixed.svelte">
    Fixed positioning
  </Demo>

  <Demo component={PositionAlign} file="flyout-panel/_PositionAlign.svelte">
    Position and Alignment
  </Demo>

  <Demo component={SizeColor} file="flyout-panel/_SizeColor.svelte">
    Size and Color
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Sticky from './_Sticky.svelte';
  import Fixed from './_Fixed.svelte';
  import PositionAlign from './_PositionAlign.svelte';
  import SizeColor from './_SizeColor.svelte';
</script>
