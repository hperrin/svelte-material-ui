<Snackbar bind:this={snackbarSuccess} class="success">
  <Label>{snackbarText}</Label>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>

<Snackbar bind:this={snackbarWarning} class="warning">
  <Label>{snackbarText}</Label>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>

<Snackbar bind:this={snackbarError} class="error">
  <Label>{snackbarText}</Label>
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>

<Button on:click={() => snackbarSuccess && snackbarSuccess.open()}>
  <Label style="color:green">Open Snackbar Success</Label>
</Button>

<Button on:click={() => snackbarWarning && snackbarWarning.open()}>
  <Label style="color:orange">Open Snackbar Warning</Label>
</Button>

<Button on:click={() => snackbarError && snackbarError.open()}>
  <Label style="color:red">Open Snackbar Error</Label>
</Button>

<script lang="ts">
  import Snackbar, {
    Label,
    Actions,
    SnackbarComponentDev,
  } from '@smui/snackbar';
  import IconButton from '@smui/icon-button';
  import Button from '@smui/button';

  let snackbarSuccess: SnackbarComponentDev;
  let snackbarWarning: SnackbarComponentDev;
  let snackbarError: SnackbarComponentDev;

  let snackbarText = 'Snackbar Text';
</script>
