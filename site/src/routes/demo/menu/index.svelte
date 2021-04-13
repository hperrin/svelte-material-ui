<svelte:head>
  <title>Menu - SMUI</title>
</svelte:head>

<section>
  <h2>Menu</h2>

  <Demo component={Static} file="menu/Static.svelte" />

  <Demo component={Anchored} file="menu/Anchored.svelte">
    Anchored automatically
  </Demo>

  <Demo
    component={TwoLineManunalAnchor}
    file="menu/TwoLineManunalAnchor.svelte"
  >
    Two line, anchored manually, corner set to bottom-left
  </Demo>

  <Demo component={SelectionGroup} file="menu/SelectionGroup.svelte">
    Selection groups
  </Demo>

  <div style="padding-top: 200px;">Long div for scrolling...</div>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Static from './Static.svelte';
  import Anchored from './Anchored.svelte';
  import TwoLineManunalAnchor from './TwoLineManunalAnchor.svelte';
  import SelectionGroup from './SelectionGroup.svelte';
</script>
