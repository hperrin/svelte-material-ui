<svelte:head>
  <title>Menu Surface - SMUI</title>
</svelte:head>

<section>
  <h2>Menu Surface</h2>

  <Demo component={Simple} file="menu-surface/Simple.svelte" />

  <Demo component={Static} file="menu-surface/Static.svelte" />

  <Demo component={Anchored} file="menu-surface/Anchored.svelte">
    Anchored automatically, corner set to bottom-left
  </Demo>

  <Demo component={ManualAnchor} file="menu-surface/ManualAnchor.svelte">
    Anchored manually
  </Demo>

  <div style="padding-top: 200px;">Long div for scrolling...</div>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Static from './Static.svelte';
  import Anchored from './Anchored.svelte';
  import ManualAnchor from './ManualAnchor.svelte';
</script>
