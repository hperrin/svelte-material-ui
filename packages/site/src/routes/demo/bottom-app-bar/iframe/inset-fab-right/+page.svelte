<AutoAdjust {bottomAppBar}>
  <h5>Inset FAB (Right)</h5>

  <LoremIpsum />
  <img
    alt="Page content placeholder"
    src="/page-content.jpg"
    style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
  />
</AutoAdjust>

<BottomAppBar bind:this={bottomAppBar}>
  <Section>
    <IconButton class="material-icons" aria-label="Archive">archive</IconButton>
    <IconButton class="material-icons" aria-label="Mark unread">mail</IconButton
    >
    <IconButton class="material-icons" aria-label="Label">label</IconButton>
    <IconButton class="material-icons" aria-label="Trash">delete</IconButton>
  </Section>
  <Section fabInset>
    <Fab aria-label="Reply">
      <Icon class="material-icons">reply</Icon>
    </Fab>
  </Section>
</BottomAppBar>

<script lang="ts">
  import BottomAppBar, {
    Section,
    AutoAdjust,
  } from '@smui-extra/bottom-app-bar';
  import IconButton from '@smui/icon-button';
  import Fab, { Icon } from '@smui/fab';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let bottomAppBar: BottomAppBar;
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
