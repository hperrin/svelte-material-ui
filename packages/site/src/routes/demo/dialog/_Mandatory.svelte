<Dialog
  bind:open
  scrimClickAction=""
  escapeKeyAction=""
  aria-labelledby="mandatory-title"
  aria-describedby="mandatory-content"
>
  <Title id="mandatory-title">Webpage Troll</Title>
  <Content id="mandatory-content">
    Before you continue on this page, you must answer my riddle of age. When
    Alice was six her brother was half, now Alice is 90, you do the math.
    <br /><br />
    How old is Alice's brother now?
  </Content>
  <Actions>
    <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
      <Label>Fifty</Label>
    </Button>
    <Button on:click={() => (response = 'You are correct. You may pass.')}>
      <Label>Eighty-Seven</Label>
    </Button>
    <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
      <Label>Forty-Five</Label>
    </Button>
    <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
      <Label>Seventy-Five</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Result: {response}</pre>

<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let open = false;
  let response = 'Nothing yet.';
</script>
