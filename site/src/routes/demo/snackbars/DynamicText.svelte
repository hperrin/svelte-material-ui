<Snackbar bind:this={snackbar} labelText={text} timeoutMs={-1}>
  <Label />
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>

<Textfield bind:value={text} label="Dynamic Text" input$required />

<Button on:click={() => snackbar && snackbar.open()}>
  <Label>Open Snackbar</Label>
</Button>

<script>
  import Snackbar, { Actions, Label } from '@smui/snackbar';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';

  let snackbar;
  let text = 'This is a snackbar with dynamic text.';
</script>
