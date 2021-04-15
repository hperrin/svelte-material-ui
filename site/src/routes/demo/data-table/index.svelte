<svelte:head>
  <title>Data Table - SMUI</title>
</svelte:head>

<section>
  <h2>Data Table</h2>

  <pre class="spaced">npm install --save-dev @smui/data-table</pre>

  <Demo component={Simple} file="data-table/_Simple.svelte" />

  <Demo component={RowSelection} file="data-table/_RowSelection.svelte">
    With row selection
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import RowSelection from './_RowSelection.svelte';
</script>
