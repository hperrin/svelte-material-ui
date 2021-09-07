<TopAppBar bind:this={topAppBar} {dense} {prominent} {variant} bind:collapsed>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>{title}</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"
        >file_download</IconButton
      >
      {#if variant !== 'short'}
        <IconButton class="material-icons" aria-label="Print this page"
          >print</IconButton
        >
        <IconButton class="material-icons" aria-label="Bookmark this page"
          >bookmark</IconButton
        >
      {/if}
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  {#if shortAlwaysCollapsed}
    <h5>Short, Always Collapsed</h5>
  {/if}
  <LoremIpsum />
  <img
    alt="Page content placeholder"
    src="/page-content.jpg"
    style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
  />
</AutoAdjust>

<script>
  import { stores } from '@sapper/app';
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import LoremIpsum from '../../../components/LoremIpsum.svelte';

  // The iframe is loaded with a style in the query part
  // of the URL, and we can read it from here.
  const { page } = stores();

  let dense = false;
  let prominent = false;
  let variant = 'standard';
  let collapsed = false;
  let title = 'Standard';
  let shortAlwaysCollapsed = false;
  let topAppBar;

  switch ($page.query.style) {
    case 'fixed':
      variant = 'fixed';
      title = 'Fixed';
      break;
    case 'dense':
      dense = true;
      title = 'Dense';
      break;
    case 'prominent':
      prominent = true;
      title = 'Prominent';
      break;
    case 'short':
      variant = 'short';
      title = 'Short';
      break;
    case 'short-closed':
      shortAlwaysCollapsed = true;
      variant = 'short';
      collapsed = true;
      title = 'Short';
      break;
  }
</script>

<style>
  /* Hide everything above this component. */
  :global(app, body, html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>
