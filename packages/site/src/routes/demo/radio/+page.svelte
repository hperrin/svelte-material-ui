<svelte:head>
  <title>Radio - SMUI</title>
</svelte:head>

<section>
  <h2>Radio</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/radio</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="radio/_Simple.svelte" />

  <Demo component={Touch} file="radio/_Touch.svelte">
    Increased touch target
  </Demo>

  <Demo
    component={Colored}
    files={['radio/_Colored.svelte', 'radio/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Touch from './_Touch.svelte';
  import Colored from './_Colored.svelte';
</script>
