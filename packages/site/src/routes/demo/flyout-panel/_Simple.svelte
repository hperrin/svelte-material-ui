<div class="container">
  This is a flyout panel container. The flyout panel will appear at the bottom
  of this container when it's open.

  <Button onclick={() => (open = !open)}>
    <Label>Toggle Flyout Panel</Label>
  </Button>

  <!--
  Putting an elevated component in an elevated container is generally
  discouraged, so we use variant="outlined" here.
  -->
  <FlyoutPanel
    {open}
    variant="outlined"
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
    padding: 24px 24px 67px;
    background-color: var(--mdc-theme-background, #f8f8f8);
    overflow: hidden;
  }
</style>
