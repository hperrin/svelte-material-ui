<Snackbar bind:this={snackbarWithClose}>
  <Label>This is a snackbar.</Label>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>

<Snackbar bind:this={snackbarWithoutClose}>
  <Label>This is a snackbar.</Label>
</Snackbar>

<Button on:click={() => snackbarWithClose.open()}>
  <Label>Open Snackbar With Dismiss</Label>
</Button>
<Button on:click={() => snackbarWithoutClose.open()}>
  <Label>Open Snackbar Without Dismiss</Label>
</Button>

<script lang="ts">
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';

  let snackbarWithClose: Snackbar;
  let snackbarWithoutClose: Snackbar;
</script>
