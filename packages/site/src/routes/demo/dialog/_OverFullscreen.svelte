<Dialog
  bind:open
  fullscreen
  aria-labelledby="over-fullscreen-title"
  aria-describedby="over-fullscreen-content"
  onSMUIDialogClosed={closeHandler}
>
  <Header>
    <Title id="over-fullscreen-title">Terms and Conditions</Title>
    <CloseTooltipWrapper>
      <IconButton action="close">
        <Icon class="material-icons">close</Icon>
      </IconButton>
    </CloseTooltipWrapper>
  </Header>
  <Content id="over-fullscreen-content">
    <Button onclick={() => (subOpen = true)}>
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

  {#snippet over()}
    <Dialog
      bind:open={subOpen}
      selection
      aria-labelledby="over-fullscreen-confirmation-title"
      aria-describedby="over-fullscreen-confirmation-content"
      onSMUIDialogClosed={confirmationCloseHandler}
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
  {/snippet}
</Dialog>

<Button onclick={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Response: {response}, Selected: {selected}</pre>

<script lang="ts">
  import Dialog, {
    Header,
    Title,
    CloseTooltipWrapper,
    Content,
    Actions,
    InitialFocus,
  } from '@smui/dialog';
  import IconButton, { Icon } from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import List, { Item, Graphic, Text } from '@smui/list';
  import Radio from '@smui/radio';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let open = $state(false);
  let subOpen = $state(false);
  let selection = $state('Radishes');
  let selected = $state('Nothing yet.');
  let response = $state('Nothing yet.');

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
