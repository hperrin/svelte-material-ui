<div class="container">
  This is a flyout panel container that is very tall and scrolls. The flyout
  panel will appear at the bottom of this container when it's open, and will
  stick there as you scroll.

  <Button onclick={() => (open = !open)}>
    <Label>Toggle Flyout Panel</Label>
  </Button>

  <div style="margin-top: 400px;">25%</div>

  <div style="margin-top: 400px;">50%</div>

  <div style="margin-top: 400px;">75%</div>

  <div style="margin-top: 400px;">100% This is the bottom.</div>

  <!--
  Putting an elevated component in an elevated container is generally
  discouraged, so we use variant="outlined" here.
  -->
  <!--
  We're putting transform: translateY(67px) to offset the bottom padding of the
  container.
  -->
  <FlyoutPanel
    {open}
    variant="outlined"
    sticky
    style="width: 100%; max-width: 360px; justify-content: space-between; transform: translateY(67px);"
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
    height: 250px;
    overflow: auto;
  }
</style>
