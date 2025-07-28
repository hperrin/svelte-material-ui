<Snackbar bind:this={snackbarSuccess} class="demo-success">
  <Label
    >That thing you tried to do actually worked, if you can believe it!</Label
  >
  <Actions>
    <IconButton title="Dismiss">
      <Icon class="material-icons">close</Icon>
    </IconButton>
  </Actions>
</Snackbar>

<Snackbar bind:this={snackbarWarning} class="demo-warning">
  <Label
    >Ok, it looks like that thing you tried to do might not have work.</Label
  >
  <Actions>
    <IconButton title="Dismiss">
      <Icon class="material-icons">close</Icon>
    </IconButton>
  </Actions>
</Snackbar>

<Snackbar bind:this={snackbarError} class="demo-error">
  <Label
    >That thing you tried to do didn't work. Honestly, I'm not sure why you even
    tried.</Label
  >
  <Actions>
    <IconButton title="Dismiss">
      <Icon class="material-icons">close</Icon>
    </IconButton>
  </Actions>
</Snackbar>

<Button onclick={() => snackbarSuccess.open()}>
  <Label>Open Success Snackbar</Label>
</Button>

<Button onclick={() => snackbarWarning.open()}>
  <Label>Open Warning Snackbar</Label>
</Button>

<Button onclick={() => snackbarError.open()}>
  <Label>Open Error Snackbar</Label>
</Button>

<script lang="ts">
  import Snackbar, { Label, Actions } from '@smui/snackbar';
  import IconButton, { Icon } from '@smui/icon-button';
  import Button from '@smui/button';

  let snackbarSuccess: Snackbar;
  let snackbarWarning: Snackbar;
  let snackbarError: Snackbar;
</script>
