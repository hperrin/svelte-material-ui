<div class="container">
  Let's make the panel <strong>bigger</strong> and more
  <strong>noticeable</strong>.

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
    color="primary"
    size="50px"
    style="width: 100%; max-width: 360px; justify-content: space-between; padding: 12px 16px;"
  >
    <span>You have unsaved changes.</span>
    <Button color="secondary" onclick={() => (open = false)}>
      <Label>Save</Label>
    </Button>
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
    padding: 24px 24px 113px;
    background-color: var(--mdc-theme-background, #f8f8f8);
    overflow: hidden;
  }
</style>
