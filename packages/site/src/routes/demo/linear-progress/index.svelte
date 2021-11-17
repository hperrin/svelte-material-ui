<svelte:head>
  <title>Linear Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Linear Progress</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/linear-progress</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="linear-progress/_Simple.svelte" />

  <Demo component={Buffered} file="linear-progress/_Buffered.svelte">
    Buffered
  </Demo>

  <Demo component={Indeterminate} file="linear-progress/_Indeterminate.svelte">
    Indeterminate
  </Demo>

  <Demo
    component={Colored}
    files={['linear-progress/_Colored.svelte', 'linear-progress/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Buffered from './_Buffered.svelte';
  import Indeterminate from './_Indeterminate.svelte';
  import Colored from './_Colored.svelte';
</script>
