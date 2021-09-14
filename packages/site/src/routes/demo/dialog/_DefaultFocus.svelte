<Dialog
  bind:open
  aria-labelledby="default-focus-title"
  aria-describedby="default-focus-content"
>
  <Title id="default-focus-title">Advice</Title>
  <Content id="default-focus-content">
    Build something today, even if it sucks.
  </Content>
  <Actions>
    <Button on:click={() => (response = 'I will make you! Do it!')}>
      <Label>You Can't Make Me</Label>
    </Button>
    <Button
      defaultAction
      use={[InitialFocus]}
      on:click={() => (response = 'It will be glorious.')}
    >
      <Label>I Will</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Response: {response}</pre>

<script lang="ts">
  import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let open = false;
  let response = 'Nothing yet.';
</script>
