<svelte:head>
  <title>Banner - SMUI</title>
</svelte:head>

<Fixed />

<section>
  <h2>Banner</h2>

  <ShowSource file="banner/Fixed.svelte" />

  <General />
  <ShowSource file="banner/General.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Fixed from './Fixed.svelte';
  import General from './General.svelte';
</script>
