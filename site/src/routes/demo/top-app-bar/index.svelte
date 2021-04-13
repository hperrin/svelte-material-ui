<svelte:head>
  <title>Top App Bar - SMUI</title>
</svelte:head>

<section>
  <h2>Top App Bar</h2>

  <Static />
  <ShowSource file="card/Static.svelte" />

  <Variants />
  <ShowSource file="card/Variants.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Static from './Static.svelte';
  import Variants from './Variants.svelte';
</script>
