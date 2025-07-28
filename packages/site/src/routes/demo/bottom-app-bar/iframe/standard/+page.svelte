<AutoAdjust {bottomAppBar}>
  <h5>Standard</h5>

  <LoremIpsum />
  <img
    alt="Page content placeholder"
    src="/page-content.jpg"
    style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
  />
</AutoAdjust>

<BottomAppBar bind:this={bottomAppBar}>
  <Section>
    <IconButton>
      <Icon class="material-icons">menu</Icon>
    </IconButton>
  </Section>
  <Section>
    <IconButton aria-label="Search">
      <Icon class="material-icons">search</Icon>
    </IconButton>
    <IconButton aria-label="More">
      <Icon class="material-icons">more_vert</Icon>
    </IconButton>
  </Section>
</BottomAppBar>

<script lang="ts">
  import BottomAppBar, {
    Section,
    AutoAdjust,
  } from '@smui-extra/bottom-app-bar';
  import IconButton, { Icon } from '@smui/icon-button';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let bottomAppBar: BottomAppBar | null = $state(null);
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
