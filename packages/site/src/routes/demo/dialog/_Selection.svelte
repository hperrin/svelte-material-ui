<Dialog
  bind:open
  selection
  aria-labelledby="list-selection-title"
  aria-describedby="list-selection-content"
  on:SMUIDialog:closed={closeHandler}
>
  <Title id="list-selection-title">Dialog Title</Title>
  <Content id="list-selection-content">
    <List radioList>
      <Item use={[InitialFocus]}>
        <Graphic>
          <Radio bind:group={selection} value="Radishes" />
        </Graphic>
        <Text>Radishes</Text>
      </Item>
      <Item>
        <Graphic>
          <Radio bind:group={selection} value="Turnips" />
        </Graphic>
        <Text>Turnips</Text>
      </Item>
      <Item>
        <Graphic>
          <Radio bind:group={selection} value="Broccoli" />
        </Graphic>
        <Text>Broccoli</Text>
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

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Selected: {selected}</pre>

<script lang="ts">
  import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import List, { Item, Graphic, Text } from '@smui/list';
  import Radio from '@smui/radio';

  let open = false;
  let selection = 'Radishes';
  let selected = 'Nothing yet.';

  function closeHandler(e: CustomEvent<{ action: string }>) {
    if (e.detail.action === 'accept') {
      selected = selection;
    }
    selection = 'Radishes';
  }
</script>
