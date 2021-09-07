<Dialog
  bind:open
  selection
  aria-labelledby="list-title"
  aria-describedby="list-content"
>
  <Title id="list-title">Dialog Title</Title>
  <Content id="list-content">
    <List>
      {#each [...Array(100)].map((v, i) => i + 1) as item}
        <Item
          on:click={() => {
            clicked = item;
            open = false;
          }}
        >
          <Text>Item #{item}</Text>
        </Item>
      {/each}
    </List>
  </Content>
</Dialog>

<Button on:click={() => (open = true)}><Label>Open Dialog</Label></Button>

<pre class="status">Clicked: {clicked}{clicked === 69 ? ', nice' : ''}</pre>

<script>
  import Dialog, { Title, Content } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import List, { Item, Text } from '@smui/list';

  let open;
  let clicked = 'Nothing yet.';
</script>
