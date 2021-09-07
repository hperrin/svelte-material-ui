<Dialog
  bind:open
  fullscreen
  aria-labelledby="fullscreen-title"
  aria-describedby="fullscreen-content"
  on:MDCDialog:closed={closeHandler}
>
  <Header>
    <Title id="fullscreen-title">Terms and Conditions</Title>
    <IconButton action="close" class="material-icons">close</IconButton>
  </Header>
  <Content id="fullscreen-content">
    {#each Array(3) as _item}
      <LoremIpsum />
    {/each}
  </Content>
  <Actions>
    <Button action="reject">
      <Label>Reject</Label>
    </Button>
    <Button action="accept" default>
      <Label>Accept</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Response: {response}</pre>

<script>
  import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import LoremIpsum from '../../../components/LoremIpsum.svelte';

  let open;
  let response = 'Nothing yet.';

  function closeHandler(e) {
    switch (e.detail.action) {
      case 'close':
        response = 'Closed without response.';
        break;
      case 'reject':
        response = 'Rejected.';
        break;
      case 'accept':
        response = 'Accepted.';
        break;
    }
  }
</script>
