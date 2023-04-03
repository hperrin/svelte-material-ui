<svelte:head>
  <title>Autocomplete - SMUI</title>
</svelte:head>

<section>
  <h2>Auto<wbr />complete</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui-extra/autocomplete</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="autocomplete/_Simple.svelte" />

  <Demo component={Prefilled} file="autocomplete/_Prefilled.svelte">
    Prefilled value
  </Demo>

  <Demo component={Combobox} file="autocomplete/_Combobox.svelte">
    Combobox
    <svelte:fragment slot="subtitle">
      A combobox lets the user input any text, but provides autocomplete
      functionality as well.
    </svelte:fragment>
  </Demo>

  <Demo component={Objects} file="autocomplete/_Objects.svelte">
    Objects as options
  </Demo>

  <Demo component={AddEntries} file="autocomplete/_AddEntries.svelte">
    Adding entries
  </Demo>

  <Demo component={AddToList} file="autocomplete/_AddToList.svelte">
    Add entries to a list
    <svelte:fragment slot="subtitle">
      Leave the menu open and don't fill the textbox upon selection.
    </svelte:fragment>
  </Demo>

  <Demo component={Async} file="autocomplete/_Async.svelte">
    Async options loading
    <svelte:fragment slot="subtitle">
      Autocomplete supports retrieving results asynchronously, like from a REST
      endpoint. Try typing a letter in the box below.
    </svelte:fragment>
  </Demo>

  <Demo component={FullWidth} file="autocomplete/_FullWidth.svelte">
    Full width
  </Demo>

  <Demo component={Manual} file="autocomplete/_Manual.svelte">
    Manual setup
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Prefilled from './_Prefilled.svelte';
  import Combobox from './_Combobox.svelte';
  import Objects from './_Objects.svelte';
  import AddEntries from './_AddEntries.svelte';
  import AddToList from './_AddToList.svelte';
  import Async from './_Async.svelte';
  import FullWidth from './_FullWidth.svelte';
  import Manual from './_Manual.svelte';
</script>

<style>
  * :global(.margins) {
    margin: 18px 0 24px;
  }

  * :global(.columns) {
    display: flex;
    flex-wrap: wrap;
  }

  * :global(.columns > *) {
    flex-basis: 0;
    min-width: 245px;
    margin-right: 12px;
  }
  * :global(.columns > *:last-child) {
    margin-right: 0;
  }

  * :global(.columns .smui-autocomplete),
  * :global(.columns .mdc-text-field) {
    width: 218px;
  }
</style>
