<Dialog bind:open sheet aria-describedby="sheet-content">
  <CloseTooltipWrapper>
    <IconButton action="close">
      <Icon class="material-icons">close</Icon>
    </IconButton>
  </CloseTooltipWrapper>
  <Content id="sheet-content">
    <LoremIpsum />
  </Content>
</Dialog>

<Dialog
  bind:open={openNoPadding}
  noContentPadding
  sheet
  aria-describedby="sheet-no-padding-content"
>
  <CloseTooltipWrapper>
    <IconButton action="close">
      <Icon class="material-icons">close</Icon>
    </IconButton>
  </CloseTooltipWrapper>
  <Content id="sheet-no-padding-content">
    <LoremIpsum />
  </Content>
</Dialog>

<Button onclick={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<Button onclick={() => (openNoPadding = true)}>
  <Label>Open No Padding Dialog</Label>
</Button>

<script lang="ts">
  import Dialog, { CloseTooltipWrapper, Content } from '@smui/dialog';
  import IconButton, { Icon } from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let open = $state(false);
  let openNoPadding = $state(false);
</script>
