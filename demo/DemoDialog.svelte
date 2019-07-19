<section>
  <h2>Dialogs</h2>

  <p>
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
  </p>

  <p class="status">Clicked: {clicked}</p>

  <p>
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
  </p>

  <p class="status">Response: {response}</p>
</section>

<script>
  import Dialog, {Title, Content, Actions, Button as DialogButton} from '../components/dialog';
  import Button, {Label} from '../components/button';

  let myDialog;
  let myDialog2;
  let clicked = 'nothing yet';
  let response = 'nothing yet';

  function closeHandler(e) {
    switch (e.detail.action) {
      case 'no':
        response = 'Ok, well, you\'re wrong.';
        break;
      case 'yes':
        response = 'You are correct. All dogs are the best dogs.';
        break;
      default:
        response = 'It\'s a simple question. You should be able to answer it.';
        break;
    }
  }
</script>