<svelte:head>
  <title>Cards - SMUI</title>
</svelte:head>

<section>
  <h2>Cards</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/card</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="card/_Simple.svelte" />

  <Demo component={Actions} file="card/_Actions.svelte">With Actions</Demo>

  <Demo component={Media} file="card/_Media.svelte">With Media</Demo>

  <Demo component={List} file="card/_List.svelte">With a List</Demo>

  <Demo component={Complex} file="card/_Complex.svelte">Complex</Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Actions from './_Actions.svelte';
  import Media from './_Media.svelte';
  import List from './_List.svelte';
  import Complex from './_Complex.svelte';
</script>

<style>
  * :global(.card-display) {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
  }

  * :global(.card-container) {
    display: inline-flex;
    /* justify-content: center; */
    align-items: center;
    min-height: 200px;
    width: 380px;
    max-width: 100%;
    overflow-x: auto;
    background-color: var(--mdc-theme-background, #f8f8f8);
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));

    padding: 20px;

    margin-right: 20px;
    margin-bottom: 20px;
  }

  * :global(.card-container > *) {
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    * :global(.card-container) {
      margin-right: 0;
      padding-right: 0;
      padding-left: 0;
    }
  }
</style>
