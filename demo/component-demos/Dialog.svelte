<section>
  <h2>Dialogs</h2>

  <div>
    <Dialog bind:this={myDialog} aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">
      <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
      <Title id="my-dialog-title">Dialog Title</Title>
      <Content id="my-dialog-content">
        Super awesome dialog body text?
      </Content>
      <Actions>
        <DialogButton on:click={() => clicked = 'No'}>
          <Label>No</Label>
        </DialogButton>
        <DialogButton on:click={() => clicked = 'Yes'} action="accept">
          <Label>Yes</Label>
        </DialogButton>
      </Actions>
    </Dialog>

    <Button on:click={() => myDialog.open()}><Label>Open Dialog</Label></Button>
  </div>

  <div class="status">Clicked: {clicked}</div>

  <div>
    Using dialog events, instead of button clicks: <br />

    <Dialog bind:this={myDialog2} aria-labelledby="my-dialog-title2" aria-describedby="my-dialog-content2" on:MDCDialog:closed={closeHandler}>
      <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
      <Title id="my-dialog-title2">The Best Dog</Title>
      <Content id="my-dialog-content2">
        Who is the best dog?
      </Content>
      <Actions>
        <DialogButton action="no">
          <Label>None of Them</Label>
        </DialogButton>
        <DialogButton action="yes" default>
          <Label>All of Them</Label>
        </DialogButton>
      </Actions>
    </Dialog>

    <Button on:click={() => myDialog2.open()}><Label>Open Dialog</Label></Button>
  </div>

  <div class="status">Response: {response}</div>

  <div>
    No actions, and a very long list dialog: <br />

    <Dialog bind:this={myDialog3} aria-labelledby="my-dialog-title3" aria-describedby="my-dialog-content3">
      <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
      <Title id="my-dialog-title3">Dialog Title</Title>
      <Content component={List} id="my-dialog-content3">
        {#each [...Array(100)].map((v, i) => i + 1) as item}
          <Item on:click={() => {clicked3 = item; myDialog3.close()} }>
            <Text>Item #{item}</Text>
          </Item>
        {/each}
      </Content>
    </Dialog>

    <Button on:click={() => myDialog3.open()}><Label>Open Dialog</Label></Button>
  </div>

  <div class="status">Clicked: {clicked3}</div>
</section>

<script>
  import Dialog, {Title, Content, Actions, Button as DialogButton} from 'svelte-material-ui/components/dialog';
  import Button, {Label} from 'svelte-material-ui/components/button';
  import List, {Item, Text} from 'svelte-material-ui/components/list';

  let myDialog;
  let myDialog2;
  let myDialog3;
  let clicked = 'nothing yet';
  let response = 'nothing yet';
  let clicked3 = 'nothing yet';

  function closeHandler(e) {
    switch (e.detail.action) {
      case 'no':
        response = 'Ok, well, you\'re wrong.';
        break;
      case 'yes':
        response = 'You are correct. All dogs are the best dog.';
        break;
      default:
        response = 'It\'s a simple question. You should be able to answer it.';
        break;
    }
  }
</script>