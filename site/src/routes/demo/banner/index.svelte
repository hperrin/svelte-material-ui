<svelte:head>
  <title>Banner - SMUI</title>
</svelte:head>

<Fixed />

<section>
  <h2>Banner</h2>

  <pre class="spaced">npm install --save-dev @smui/banner</pre>

  <Demo component="Shown above." file="banner/_Fixed.svelte" />

  <Demo component={General} file="banner/_General.svelte">Banner options</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Fixed from './_Fixed.svelte';
  import General from './_General.svelte';
</script>
