<svelte:head>
  <title>Typography - SMUI</title>
</svelte:head>

<section>
  <h2>Typography</h2>

  <pre class="demo-spaced">npm i -D @material/typography</pre>

  <Demo
    component={Typography}
    files={['typography/_Typography.svelte', 'typography/_Typography.scss']}
  />
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';
  import Typography from './_Typography.svelte';
</script>
