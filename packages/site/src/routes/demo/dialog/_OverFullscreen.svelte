<Dialog
  bind:open
  fullscreen
  aria-labelledby="over-fullscreen-title"
  aria-describedby="over-fullscreen-content"
  on:SMUIDialog:closed={closeHandler}
>
  <Header>
    <Title id="over-fullscreen-title">Terms and Conditions</Title>
    <IconButton action="close" class="material-icons">close</IconButton>
  </Header>
  <Content id="over-fullscreen-content">
    <Button on:click={() => (subOpen = true)}>
      <Label>Open Confirmation Dialog</Label>
    </Button>
    {#each Array(3) as _item}
      <LoremIpsum />
    {/each}
  </Content>
  <Actions>
    <Button action="reject">
      <Label>Reject</Label>
    </Button>
    <Button action="accept" defaultAction>
      <Label>Accept</Label>
    </Button>
  </Actions>

  <Dialog
    bind:open={subOpen}
    slot="over"
    selection
    aria-labelledby="over-fullscreen-confirmation-title"
    aria-describedby="over-fullscreen-confirmation-content"
    on:SMUIDialog:closed={confirmationCloseHandler}
  >
    <Header>
      <Title id="over-fullscreen-confirmation-title">Confirmation</Title>
    </Header>
    <Content id="over-fullscreen-confirmation-content">
      <List radioList>
        <Item use={[InitialFocus]}>
          <Graphic>
            <Radio bind:group={selection} value="One" />
          </Graphic>
          <Text>Choice 1</Text>
        </Item>
        <Item>
          <Graphic>
            <Radio bind:group={selection} value="Two" />
          </Graphic>
          <Text>Choice 2</Text>
        </Item>
      </List>
    </Content>
    <Actions>
      <Button>
        <Label>Cancel</Label>
      </Button>
      <Button action="accept">
        <Label>Accept</Label>
      </Button>
    </Actions>
  </Dialog>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Response: {response}, Selected: {selected}</pre>

<script lang="ts">
  import Dialog, {
    Header,
    Title,
    Content,
    Actions,
    InitialFocus,
  } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import List, { Item, Graphic, Text } from '@smui/list';
  import Radio from '@smui/radio';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let open = false;
  let subOpen = false;
  let selection = 'Radishes';
  let selected = 'Nothing yet.';
  let response = 'Nothing yet.';

  function confirmationCloseHandler(e: CustomEvent<{ action: string }>) {
    if (e.detail.action === 'accept') {
      selected = selection;
    }
    selection = 'Radishes';
  }

  function closeHandler(e: CustomEvent<{ action: string }>) {
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
