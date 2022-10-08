<svelte:head>
  <title>Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Lists</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/list</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="list/_Simple.svelte" />

  <Demo component={GraphicsDense} file="list/_GraphicsDense.svelte">
    A dense list with graphics
  </Demo>

  <Demo component={NonInteractive} file="list/_NonInteractive.svelte">
    A non-interactive list with activated item
  </Demo>

  <Demo component={TwoLineSelection} file="list/_TwoLineSelection.svelte">
    A two-line single selection list with avatars, disabled item, and meta
  </Demo>

  <Demo component={ThreeLine} file="list/_ThreeLine.svelte">
    A three-line list
  </Demo>

  <Demo component={Groups} file="list/_Groups.svelte">A list group</Demo>

  <Demo component={MultiLevel} file="list/_MultiLevel.svelte">
    A multi-level list
  </Demo>

  <Demo component={Radio} file="list/_Radio.svelte">A radio list</Demo>

  <Demo component={Check} file="list/_Check.svelte">
    A check list with trailing checkboxes
    <svelte:fragment slot="subtitle">
      Also, this uses the selection change event. Try CTRL+A and shift clicking.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import GraphicsDense from './_GraphicsDense.svelte';
  import NonInteractive from './_NonInteractive.svelte';
  import TwoLineSelection from './_TwoLineSelection.svelte';
  import ThreeLine from './_ThreeLine.svelte';
  import Groups from './_Groups.svelte';
  import MultiLevel from './_MultiLevel.svelte';
  import Radio from './_Radio.svelte';
  import Check from './_Check.svelte';
</script>
