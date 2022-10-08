<svelte:head>
  <title>Typography - SMUI</title>
</svelte:head>

<section>
  <h2>Typography</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @material/typography@^14.0.0</pre>

  <h5>Demos</h5>

  <Demo
    component={Typography}
    files={['typography/_Typography.svelte', 'typography/_Typography.scss']}
  />
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Typography from './_Typography.svelte';
</script>
