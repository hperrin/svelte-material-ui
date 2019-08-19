<section>
  <h2>Snackbars</h2>

  <div>
    <Snackbar bind:this={mySnackbar}>
      <Label>This is a snackbar.</Label>
    </Snackbar>

    <Snackbar bind:this={mySnackbarB}>
      <Label>This is a snackbar.</Label>
      <Actions>
        <IconButton class="material-icons" title="Dismiss">close</IconButton>
      </Actions>
    </Snackbar>

    <Button on:click={() => mySnackbar.open()}><Label>Open Snackbar</Label></Button>
    <Button on:click={() => mySnackbarB.open()}><Label>Open Snackbar With Dismiss</Label></Button>
  </div>

  <div>
    Leading with Action:

    <Snackbar leading bind:this={mySnackbar2} on:MDCSnackbar:closed={handleClosed2}>
      <Label>This is a leading snackbar.</Label>
      <Actions>
        <Button>Action</Button>
      </Actions>
    </Snackbar>

    <Button on:click={() => mySnackbar2.open()}><Label>Open Snackbar</Label></Button>
  </div>

  <pre class="status">Closed Reason: {reason2}</pre>

  <div>
    Stacked with Action:

    <Snackbar variant="stacked" bind:this={mySnackbar3} on:MDCSnackbar:closed={handleClosed3}>
      <Label>This is a stacked snackbar. Use it when you have really long text.</Label>
      <Actions>
        <Button on:click={() => action3 = 'Something'}>Something</Button>
        <Button on:click={() => action3 = 'Another'}>Another</Button>
        <IconButton on:click={() => action3 = 'Dismissed'} class="material-icons" title="Dismiss">close</IconButton>
      </Actions>
    </Snackbar>

    <Button on:click={() => mySnackbar3.open()}><Label>Open Snackbar</Label></Button>
  </div>

  <pre class="status">Closed Reason: {reason3}</pre>
  <pre class="status">Action: {action3}</pre>
</section>

<script>
  import Snackbar, {Title, Actions, Label} from 'svelte-material-ui/snackbar';
  import Button from 'svelte-material-ui/button';
  import IconButton from 'svelte-material-ui/icon-button';

  let mySnackbar;
  let mySnackbarB;
  let mySnackbar2;
  let mySnackbar3;
  let reason2 = 'nothing yet';
  let reason3 = 'nothing yet';
  let action3 = 'nothing yet';

  function handleClosed2(e) {
    reason2 = e.detail.reason;
  }

  function handleClosed3(e) {
    reason3 = e.detail.reason;
  }
</script>