<svelte:head>
  <title>Data Table - SMUI</title>
</svelte:head>

<section>
  <h2>Data Table</h2>

  <Simple />
  <ShowSource file="data-table/Simple.svelte" />

  <RowSelection />
  <ShowSource file="data-table/RowSelection.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import RowSelection from './RowSelection.svelte';
</script>
