<Snackbar leading bind:this={snackbar} on:SMUISnackbar:closed={handleClosed}>
  <Label>This is a leading snackbar.</Label>
  <Actions>
    <Button>Action</Button>
  </Actions>
</Snackbar>

<Button on:click={() => snackbar.open()}>
  <Label>Open Snackbar</Label>
</Button>

<pre class="status">Closed Reason: {reason}</pre>

<script lang="ts">
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import Button from '@smui/button';

  let snackbar: Snackbar;
  let reason = 'nothing yet';

  function handleClosed(e: CustomEvent<{ reason: string | undefined }>) {
    reason = e.detail.reason ?? 'Undefined.';
  }
</script>
