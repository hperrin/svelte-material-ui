<AutoAdjust {bottomAppBar}>
  <h5>Standard</h5>

  <div>
    <FormField>
      <Checkbox bind:checked={withFab} />
      <span slot="label">With FAB</span>
    </FormField>
  </div>

  <Button on:click={() => snackbar.open()}>
    <Label>Open Snackbar</Label>
  </Button>

  <Snackbar bind:this={snackbar}>
    <Label>This is a snackbar.</Label>
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
  </Snackbar>

  <LoremIpsum />
  <img
    alt="Page content placeholder"
    src="/page-content.jpg"
    style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
  />
</AutoAdjust>

<BottomAppBar bind:this={bottomAppBar}>
  <Section>
    <IconButton class="material-icons">menu</IconButton>
  </Section>
  {#if withFab}
    <Section fabInset>
      <Fab aria-label="New item">
        <Icon class="material-icons">add</Icon>
      </Fab>
    </Section>
  {/if}
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
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';
  import Fab, { Icon } from '@smui/fab';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let bottomAppBar: BottomAppBar;
  let snackbar: Snackbar;
  let withFab = false;
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
