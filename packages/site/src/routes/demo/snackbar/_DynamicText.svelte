<Snackbar bind:this={snackbar} labelText={text} timeoutMs={-1}>
  <Label />
  <Actions>
    <IconButton title="Dismiss">
      <Icon class="material-icons">close</Icon>
    </IconButton>
  </Actions>
</Snackbar>

<Textfield bind:value={text} label="Dynamic Text" required />

<Button onclick={() => snackbar.open()}>
  <Label>Open Snackbar</Label>
</Button>

<script lang="ts">
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import Button from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';
  import Textfield from '@smui/textfield';

  let snackbar: Snackbar;
  let text = $state('This is a snackbar with dynamic text.');
</script>
