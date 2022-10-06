<Snackbar
  variant="stacked"
  bind:this={snackbar}
  on:SMUISnackbar:closed={handleClosedStacked}
>
  <Label>
    This is a stacked snackbar. Use it when you have really long text.
  </Label>
  <Actions>
    <Button on:click={() => (action = 'Something')}>Something</Button>
    <Button on:click={() => (action = 'Another')}>Another</Button>
    <IconButton
      on:click={() => (action = 'Dismissed')}
      class="material-icons"
      title="Dismiss">close</IconButton
    >
  </Actions>
</Snackbar>

<Button on:click={() => snackbar.open()}>
  <Label>Open Snackbar</Label>
</Button>

<pre class="status">Closed Reason: {reason}</pre>
<pre class="status">Action: {action}</pre>

<script lang="ts">
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';

  let snackbar: Snackbar;
  let reason = 'nothing yet';
  let action = 'nothing yet';

  function handleClosedStacked(e: CustomEvent<{ reason: string | undefined }>) {
    reason = e.detail.reason ?? 'Undefined.';
  }
</script>
