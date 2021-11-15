<svelte:head>
  <title>Switch - SMUI</title>
</svelte:head>

<section>
  <h2>Switch</h2>

  <pre class="demo-spaced">npm i -D @smui/switch</pre>

  <Demo component={Simple} file="switch/_Simple.svelte" />

  <Demo component={SecondaryColor} file="switch/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo component={Group} file="switch/_Group.svelte">Group switch</Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Group from './_Group.svelte';
</script>
