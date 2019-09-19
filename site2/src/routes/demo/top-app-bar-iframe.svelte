<TopAppBar {dense} {prominent} {variant} bind:collapsed>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>{title}</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
      {#if variant !== 'short'}
        <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
        <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
      {/if}
    </Section>
  </Row>
</TopAppBar>
<div use:Adjust>
  <LoremIpsum />
</div>

<script>
  import {stores} from '@sapper/app';
  import TopAppBar, {Row, Section, Title, FixedAdjust, DenseFixedAdjust, ProminentFixedAdjust, ShortFixedAdjust} from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import LoremIpsum from '../../components/LoremIpsum.svelte';

  const {page} = stores();

  let dense = false;
  let prominent = false;
  let variant = 'standard';
  let collapsed = false;
  let title = 'Standard';
  let Adjust = FixedAdjust;

  switch ($page.query.style) {
    case 'fixed':
      variant = 'fixed';
      title = 'Fixed';
      break;
    case 'dense':
      dense = true;
      title = 'Dense';
      Adjust = DenseFixedAdjust;
      break;
    case 'prominent':
      prominent = true;
      title = 'Prominent';
      Adjust = ProminentFixedAdjust;
      break;
    case 'short':
      variant = 'short';
      title = 'Short';
      Adjust = ShortFixedAdjust;
      break;
    case 'short-closed':
      variant = 'short';
      collapsed = true;
      title = 'Short';
      Adjust = ShortFixedAdjust;
      break;
  }
</script>

<style>
  :global(app, body, html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>