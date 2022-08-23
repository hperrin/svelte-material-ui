<svelte:head>
  <title>Tabs - SMUI</title>
</svelte:head>

<section>
  <h2>Tabs</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/tab @smui/tab-bar</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="tabs/_Simple.svelte" />

  <Demo component={Icons} file="tabs/_Icons.svelte">
    Tabs with icons next to labels
  </Demo>

  <Demo
    component={KeyedIconsAboveRestrictedIndicatorsFadeTransition}
    file="tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte"
  >
    Keyed tabs with icons above labels, indicators restricted to content, and
    fade transition
  </Demo>

  <Demo
    component={ScrollingNoInitialActive}
    file="tabs/_ScrollingNoInitialActive.svelte"
  >
    Scrolling tabs with no initial active tab
  </Demo>

  <Demo component={MinWidth} file="tabs/_MinWidth.svelte">Min width tabs</Demo>

  <Demo component={IconIndicators} file="tabs/_IconIndicators.svelte">
    Icon indicators
  </Demo>

  <Demo component={HrefAnchors} file="tabs/_HrefAnchors.svelte">
    Tabs with href attributes render as anchor elements

    <svelte:fragment slot="subtitle">
      But they don't activate through keyboard arrow keys. They need to be
      activated with the enter key.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Icons from './_Icons.svelte';
  import KeyedIconsAboveRestrictedIndicatorsFadeTransition from './_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte';
  import ScrollingNoInitialActive from './_ScrollingNoInitialActive.svelte';
  import MinWidth from './_MinWidth.svelte';
  import IconIndicators from './_IconIndicators.svelte';
  import HrefAnchors from './_HrefAnchors.svelte';
</script>

<style>
  section > :global(div) {
    margin-bottom: 40px;
  }
</style>
