<svelte:head>
  <title>Floating Action Button - SMUI</title>
</svelte:head>

<section>
  <h2>Floating Action Button</h2>

  <pre class="demo-spaced">npm install --save-dev @smui/fab</pre>

  <Demo component={Simple} file="fab/_Simple.svelte" />

  <Demo component={PrimaryColor} file="fab/_PrimaryColor.svelte">
    Primary color
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
</script>
