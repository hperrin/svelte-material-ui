<Dialog bind:open sheet aria-describedby="sheet-content">
  <Content id="sheet-content">
    <IconButton action="close" class="material-icons">close</IconButton>
    <LoremIpsum />
  </Content>
</Dialog>

<Dialog
  bind:open={openNoPadding}
  noContentPadding
  sheet
  aria-describedby="sheet-no-padding-content"
>
  <Content id="sheet-no-padding-content">
    <IconButton action="close" class="material-icons">close</IconButton>
    <LoremIpsum />
  </Content>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<Button on:click={() => (openNoPadding = true)}>
  <Label>Open No Padding Dialog</Label>
</Button>

<script lang="ts">
  import Dialog, { Content } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let open = false;
  let openNoPadding = false;
</script>
