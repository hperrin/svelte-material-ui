<Dialog
  bind:open
  aria-labelledby="event-title"
  aria-describedby="event-content"
  on:SMUIDialog:closed={closeHandler}
>
  <Title id="event-title">The Best Dog</Title>
  <Content id="event-content">
    Out of all the dogs, which is the best dog?
  </Content>
  <Actions>
    <Button action="none">
      <Label>None of Them</Label>
    </Button>
    <Button action="all" defaultAction>
      <Label>All of Them</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Response: {response}</pre>

<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let open = false;
  let response = 'Nothing yet.';

  function closeHandler(e: CustomEvent<{ action: string }>) {
    switch (e.detail.action) {
      case 'none':
        response = "Ok, well, you're wrong.";
        break;
      case 'all':
        response = 'You are correct. All dogs are the best dog.';
        break;
      default:
        // This means the user clicked the scrim or pressed Esc to close the dialog.
        // The actions will be "close".
        response = "It's a simple question. You should be able to answer it.";
        break;
    }
  }
</script>
