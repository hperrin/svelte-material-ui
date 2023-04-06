<svelte:head>
  <title>Data Table - SMUI</title>
</svelte:head>

<section>
  <h2>Data Table</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/data-table</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="data-table/_Simple.svelte" />

  <Demo
    component={ProgressIndicator}
    file="data-table/_ProgressIndicator.svelte"
  >
    Progress indicator
  </Demo>

  <Demo component={StickyHeader} file="data-table/iframe/+page.svelte">
    Sticky header
    <svelte:fragment slot="subtitle">
      This is displayed in an iframe and the source viewer shows the iframe
      source. Sticky headers don't work if any ancestor element has the
      "overflow" style set to "hidden", "scroll", or "auto".
    </svelte:fragment>
  </Demo>

  <Demo component={RowSelection} file="data-table/_RowSelection.svelte">
    Row selection
  </Demo>

  <Demo component={Pagination} file="data-table/_Pagination.svelte">
    Pagination
  </Demo>

  <Demo component={Sortable} file="data-table/_Sortable.svelte">Sortable</Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import ProgressIndicator from './_ProgressIndicator.svelte';
  import StickyHeader from './_StickyHeader.svelte';
  import RowSelection from './_RowSelection.svelte';
  import Pagination from './_Pagination.svelte';
  import Sortable from './_Sortable.svelte';
</script>
