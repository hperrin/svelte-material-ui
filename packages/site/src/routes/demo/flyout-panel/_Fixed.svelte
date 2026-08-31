<div class="container">
  This is a flyout panel container, but this flyout panel is fixed to the
  viewport. The flyout panel will appear at the bottom of the viewport instead
  of inside this container.

  <Button onclick={() => (open = !open)}>
    <Label>Toggle Flyout Panel</Label>
  </Button>

  <FlyoutPanel
    {open}
    fixed
    style="width: 100%; max-width: 360px; justify-content: space-between;"
  >
    <span style="margin: 0 4px;">You have unsaved changes.</span>
    <Button onclick={() => (open = false)}><Label>Save</Label></Button>
  </FlyoutPanel>
</div>

<script lang="ts">
  import FlyoutPanel from '@smui/flyout-panel';
  import Button, { Label } from '@smui/button';

  let open = $state(false);
</script>

<style>
  .container {
    position: relative;
    padding: 24px;
    background-color: var(--mdc-theme-background, #f8f8f8);
  }
</style>
