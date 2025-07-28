<Dialog
  bind:open
  fullscreen
  aria-labelledby="fullscreen-title"
  aria-describedby="fullscreen-content"
  onSMUIDialogClosed={closeHandler}
>
  <Header>
    <Title id="fullscreen-title">Terms and Conditions</Title>
    <CloseTooltipWrapper>
      <IconButton action="close">
        <Icon class="material-icons">close</Icon>
      </IconButton>
    </CloseTooltipWrapper>
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
    <Button action="accept" defaultAction>
      <Label>Accept</Label>
    </Button>
  </Actions>
</Dialog>

<Button onclick={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Response: {response}</pre>

<script lang="ts">
  import Dialog, {
    Header,
    Title,
    CloseTooltipWrapper,
    Content,
    Actions,
  } from '@smui/dialog';
  import IconButton, { Icon } from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let open = $state(false);
  let response = $state('Nothing yet.');

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
