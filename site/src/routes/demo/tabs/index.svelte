<svelte:head>
  <title>Tabs - SMUI</title>
</svelte:head>

<section>
  <h2>Tabs</h2>

  <Simple />
  <ShowSource file="tabs/Simple.svelte" />

  <Icons />
  <ShowSource file="tabs/Icons.svelte" />

  <KeyedIconsAboveRestrictedIndicatorsFadeTransition />
  <ShowSource
    file="tabs/KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte"
  />

  <ScrollingNoInitialActive />
  <ShowSource file="tabs/ScrollingNoInitialActive.svelte" />

  <MinWidth />
  <ShowSource file="tabs/MinWidth.svelte" />

  <IconIndicators />
  <ShowSource file="tabs/IconIndicators.svelte" />

  <HrefAnchors />
  <ShowSource file="tabs/HrefAnchors.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
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
