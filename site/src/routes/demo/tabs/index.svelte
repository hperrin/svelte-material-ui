<svelte:head>
  <title>Tabs - SMUI</title>
</svelte:head>

<section>
  <h2>Tabs</h2>

  <Demo component={Simple} file="tabs/Simple.svelte" />

  <Demo component={Icons} file="tabs/Icons.svelte">
    Tabs with icons next to labels
  </Demo>

  <Demo
    component={KeyedIconsAboveRestrictedIndicatorsFadeTransition}
    file="tabs/KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte"
  >
    Keyed tabs with icons above labels, indicators restricted to content, and
    fade transition
  </Demo>

  <Demo
    component={ScrollingNoInitialActive}
    file="tabs/ScrollingNoInitialActive.svelte"
  >
    Scrolling tabs with no initial active tab
  </Demo>

  <Demo component={MinWidth} file="tabs/MinWidth.svelte">Min width tabs</Demo>

  <Demo component={IconIndicators} file="tabs/IconIndicators.svelte">
    Icon indicators
  </Demo>

  <Demo component={HrefAnchors} file="tabs/HrefAnchors.svelte">
    Tabs with href attributes render as anchor elements

    <svelte:fragment slot="subtitle">
      But they don't activate through keyboard arrow keys. They need to be
      activated with the enter key.
    </svelte:fragment>
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Icons from './Icons.svelte';
  import KeyedIconsAboveRestrictedIndicatorsFadeTransition from './KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte';
  import ScrollingNoInitialActive from './ScrollingNoInitialActive.svelte';
  import MinWidth from './MinWidth.svelte';
  import IconIndicators from './IconIndicators.svelte';
  import HrefAnchors from './HrefAnchors.svelte';
</script>

<style>
  section > :globa(div) {
    margin-bottom: 40px;
  }
</style>
