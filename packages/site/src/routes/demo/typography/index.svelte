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

<script>
  import Demo from '../../../components/Demo.svelte';
  import Typography from './_Typography.svelte';
</script>
