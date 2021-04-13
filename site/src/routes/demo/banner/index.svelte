<svelte:head>
  <title>Banner - SMUI</title>
</svelte:head>

<Fixed />

<section>
  <h2>Banner</h2>

  <Demo component="Shown above." file="banner/Fixed.svelte" />

  <Demo component={General} file="banner/General.svelte">Banner options</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Fixed from './Fixed.svelte';
  import General from './General.svelte';
</script>
