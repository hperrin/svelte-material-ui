<svelte:head>
  <title>Menu Surface - SMUI</title>
</svelte:head>

<section>
  <h2>Menu Surface</h2>

  <Simple />
  <ShowSource file="menu-surface/Simple.svelte" />

  <Static />
  <ShowSource file="menu-surface/Static.svelte" />

  <Anchored />
  <ShowSource file="menu-surface/Anchored.svelte" />

  <ManualAnchor />
  <ShowSource file="menu-surface/ManualAnchor.svelte" />

  <div style="padding-top: 200px;">Long div for scrolling...</div>
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Static from './Static.svelte';
  import Anchored from './Anchored.svelte';
  import ManualAnchor from './ManualAnchor.svelte';
</script>
