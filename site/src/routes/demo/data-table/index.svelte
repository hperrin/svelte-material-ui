<svelte:head>
  <title>Data Table - SMUI</title>
</svelte:head>

<section>
  <h2>Data Table</h2>

  <Demo component={Simple} file="data-table/Simple.svelte" />

  <Demo component={RowSelection} file="data-table/RowSelection.svelte">
    With row selection
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import RowSelection from './RowSelection.svelte';
</script>
