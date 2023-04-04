<svelte:head>
  <title>Layout Grid - SMUI</title>
</svelte:head>

<section>
  <h2>Layout Grid</h2>
  <p>Try resizing your window to see the cells adapt to the new size.</p>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/layout-grid</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="layout-grid/_Simple.svelte" />

  <Demo component={Span} file="layout-grid/_Span.svelte">Span</Demo>

  <Demo component={Order} file="layout-grid/_Order.svelte">Order</Demo>

  <Demo
    component={FixedColumnWidth}
    file="layout-grid/_FixedColumnWidth.svelte"
  >
    Fixed Column Width
  </Demo>

  <Demo component={Align} file="layout-grid/_Align.svelte">Align</Demo>

  <Demo component={Nested} file="layout-grid/_Nested.svelte">
    Nested
    <svelte:fragment slot="subtitle">
      Only use this if you must because it doesn't align well at some
      resolutions.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Span from './_Span.svelte';
  import Order from './_Order.svelte';
  import FixedColumnWidth from './_FixedColumnWidth.svelte';
  import Align from './_Align.svelte';
  import Nested from './_Nested.svelte';
</script>
