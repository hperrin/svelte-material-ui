<svelte:head>
  <title>Linear Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Linear Progress</h2>

  <Simple />
  <ShowSource file="linear-progress/Simple.svelte" />

  <Buffered />
  <ShowSource file="linear-progress/Buffered.svelte" />

  <Indeterminate />
  <ShowSource file="linear-progress/Indeterminate.svelte" />

  <Colored />
  <ShowSource file="linear-progress/Colored.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Buffered from './Buffered.svelte';
  import Indeterminate from './Indeterminate.svelte';
  import Colored from './Colored.svelte';
</script>
