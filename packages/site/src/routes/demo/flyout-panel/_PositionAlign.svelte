<div class="container">
  This flyout panel is fixed to the viewport.

  <Button onclick={() => (open = !open)}>
    <Label>Toggle Flyout Panel</Label>
  </Button>

  <div style="margin-top: 1em;">
    <SegmentedButton
      segments={['left', 'top', 'right', 'bottom']}
      singleSelect
      bind:selected={position}
    >
      {#snippet segment(segment)}
        <Segment {segment}>
          <Label>{segment}</Label>
        </Segment>
      {/snippet}
    </SegmentedButton>
  </div>

  <div style="margin-top: 1em;">
    <SegmentedButton
      segments={['start', 'middle', 'end']}
      singleSelect
      bind:selected={align}
    >
      {#snippet segment(segment)}
        <Segment {segment}>
          <Label>{segment}</Label>
        </Segment>
      {/snippet}
    </SegmentedButton>
  </div>

  <!--
  The default role of a flyout panel is "status". In this case, we're using it
  as a toolbar, so we should change the role appropriately.
  -->
  <FlyoutPanel {open} fixed {position} {align} style="gap: 1em;" role="toolbar">
    <IconButton size="button">
      <Icon class="material-icons">build</Icon>
    </IconButton>
    <IconButton size="button">
      <Icon class="material-icons">search</Icon>
    </IconButton>
    <IconButton size="button">
      <Icon class="material-icons">add_shopping_cart</Icon>
    </IconButton>
  </FlyoutPanel>
</div>

<script lang="ts">
  import FlyoutPanel from '@smui/flyout-panel';
  import Button from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';
  import SegmentedButton, { Segment } from '@smui/segmented-button';
  import { Label } from '@smui/common';

  let open = $state(false);
  let position = $state<'left' | 'top' | 'right' | 'bottom'>('bottom');
  let align = $state<'start' | 'middle' | 'end'>('middle');
</script>

<style>
  .container {
    position: relative;
    padding: 24px;
    background-color: var(--mdc-theme-background, #f8f8f8);
  }
</style>
