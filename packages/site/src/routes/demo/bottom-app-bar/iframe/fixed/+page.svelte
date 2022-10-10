<AutoAdjust {bottomAppBar}>
  <h5>Fixed</h5>

  <LoremIpsum />
  <img
    alt="Page content placeholder"
    src="/page-content.jpg"
    style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
  />
</AutoAdjust>

<BottomAppBar bind:this={bottomAppBar} variant="fixed">
  <Section>
    <IconButton class="material-icons">menu</IconButton>
  </Section>
  <Section>
    <IconButton class="material-icons" aria-label="Search">search</IconButton>
    <IconButton class="material-icons" aria-label="More">more_vert</IconButton>
  </Section>
</BottomAppBar>

<script lang="ts">
  import BottomAppBar, {
    Section,
    AutoAdjust,
  } from '@smui-extra/bottom-app-bar';
  import IconButton from '@smui/icon-button';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let bottomAppBar: BottomAppBar;
</script>

<style>
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>
