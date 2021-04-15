<svelte:head>
  <title>Typography - SMUI</title>
</svelte:head>

<section>
  <h2>Typography</h2>

  <pre class="spaced">npm install --save-dev @material/typography</pre>

  <Demo
    component={Typography}
    file="typography/_Typography.svelte"
    scss="typography/_Typography.scss"
  />
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Typography from './_Typography.svelte';
</script>
