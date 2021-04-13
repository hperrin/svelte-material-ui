<h6 class="demo-title">
  Using dialog events instead of button clicks, with a default button that is
  initially focused
</h6>

<Dialog
  bind:open
  aria-labelledby="event-title"
  aria-describedby="event-content"
  on:MDCDialog:closed={closeHandler}
>
  <Title id="event-title">The Best Dog</Title>
  <Content id="event-content">
    Out of all the dogs, which is the best dog?
  </Content>
  <Actions>
    <Button action="none">
      <Label>None of Them</Label>
    </Button>
    <Button action="all" default use={[InitialFocus]}>
      <Label>All of Them</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Response: {response}</pre>

<script>
  import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let open;
  let response = 'Nothing yet.';

  function closeHandler(e) {
    switch (e.detail.action) {
      case 'none':
        response = "Ok, well, you're wrong.";
        break;
      case 'all':
        response = 'You are correct. All dogs are the best dog.';
        break;
      default:
        response = "It's a simple question. You should be able to answer it.";
        break;
    }
  }
</script>
