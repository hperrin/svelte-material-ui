<svelte:head>
  <title>Segmented Button - SMUI</title>
</svelte:head>

<section>
  <h2>Segmented Button</h2>

  <pre class="demo-spaced">npm i -D @smui/segmented-button</pre>

  <Demo
    component={SingleSelection}
    file="segmented-button/_SingleSelection.svelte"
  >
    Single Selection
  </Demo>

  <Demo
    component={GroupSelection}
    file="segmented-button/_GroupSelection.svelte"
  >
    Group Selection
  </Demo>

  <Demo component={IconsKeys} file="segmented-button/_IconsKeys.svelte">
    Icons and Keyed Segments
  </Demo>

  <Demo component={Touch} file="segmented-button/_Touch.svelte">
    Increased Touch Target
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import SingleSelection from './_SingleSelection.svelte';
  import GroupSelection from './_GroupSelection.svelte';
  import IconsKeys from './_IconsKeys.svelte';
  import Touch from './_Touch.svelte';
</script>
