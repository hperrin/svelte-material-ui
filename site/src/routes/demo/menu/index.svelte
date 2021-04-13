<svelte:head>
  <title>Menu - SMUI</title>
</svelte:head>

<section>
  <h2>Menu</h2>

  <Static />
  <ShowSource file="menu/Static.svelte" />

  <Anchored />
  <ShowSource file="menu/Anchored.svelte" />

  <TwoLineManunalAnchor />
  <ShowSource file="menu/TwoLineManunalAnchor.svelte" />

  <SelectionGroup />
  <ShowSource file="menu/SelectionGroup.svelte" />

  <div style="padding-top: 200px;">Long div for scrolling...</div>
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Static from './Static.svelte';
  import Anchored from './Anchored.svelte';
  import TwoLineManunalAnchor from './TwoLineManunalAnchor.svelte';
  import SelectionGroup from './SelectionGroup.svelte';
</script>
