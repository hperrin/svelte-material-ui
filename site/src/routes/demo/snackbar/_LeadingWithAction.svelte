<Snackbar leading bind:this={snackbar} on:MDCSnackbar:closed={handleClosed}>
  <Label>This is a leading snackbar.</Label>
  <Actions>
    <Button>Action</Button>
  </Actions>
</Snackbar>

<Button on:click={() => snackbar.open()}>
  <Label>Open Snackbar</Label>
</Button>

<pre class="status">Closed Reason: {reason}</pre>

<script>
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import Button from '@smui/button';

  let snackbar;
  let reason = 'nothing yet';

  function handleClosed(e) {
    reason = e.detail.reason;
  }
</script>
