<TopAppBar bind:this={topAppBar} variant="fixed">
  <Row>
    <Section>
      <IconButton>
        <Icon class="material-icons">menu</Icon>
      </IconButton>
      <Title>Fixed</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton aria-label="Download">
        <Icon class="material-icons">file_download</Icon>
      </IconButton>
      <IconButton aria-label="Print this page">
        <Icon class="material-icons">print</Icon>
      </IconButton>
      <IconButton aria-label="Bookmark this page">
        <Icon class="material-icons">bookmark</Icon>
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  <LoremIpsum />
  <img
    alt="Page content placeholder"
    src="/page-content.jpg"
    style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
  />
</AutoAdjust>

<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton, { Icon } from '@smui/icon-button';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let topAppBar: TopAppBar | null = $state(null);
</script>

<style>
  /* Hide everything above this component. */
  :global(#smui-app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>
