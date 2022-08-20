<svelte:head>
  <title>Menu - SMUI</title>
</svelte:head>

<section>
  <h2>Menu</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/menu</pre>

  <h5>Demos</h5>

  <Demo component={Static} file="menu/_Static.svelte" />

  <Demo component={Anchored} file="menu/_Anchored.svelte">
    Anchored automatically
  </Demo>

  <Demo
    component={TwoLineManunalAnchor}
    file="menu/_TwoLineManunalAnchor.svelte"
  >
    Two line, anchored manually, corner set to bottom-left
  </Demo>

  <Demo component={SelectionGroup} file="menu/_SelectionGroup.svelte">
    Selection groups
  </Demo>

  <div style="padding-top: 200px;">Long div for scrolling...</div>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Static from './_Static.svelte';
  import Anchored from './_Anchored.svelte';
  import TwoLineManunalAnchor from './_TwoLineManunalAnchor.svelte';
  import SelectionGroup from './_SelectionGroup.svelte';
</script>
