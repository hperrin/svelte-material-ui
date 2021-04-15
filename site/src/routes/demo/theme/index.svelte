<svelte:head>
  <title>Theme - SMUI</title>
</svelte:head>

<section>
  <h2>Theme</h2>

  <pre class="spaced">npm install --save-dev @material/theme</pre>

  <Demo component={Theme} file="theme/_Theme.svelte" scss="theme/_Theme.scss" />
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Theme from './_Theme.svelte';
</script>
