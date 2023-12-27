<Dialog
  bind:open
  selection
  aria-labelledby="list-title"
  aria-describedby="list-content"
>
  <Title id="list-title">Dialog Title</Title>
  <Content id="list-content">
    <List>
      {#each [...Array(100)].map((_v, i) => i + 1) as item}
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

<pre class="status">Clicked: {clicked}{clicked === 69
    ? ', nice'
    : clicked === 42
      ? ', the answer to life, the universe, and everything'
      : ''}</pre>

<script lang="ts">
  import Dialog, { Title, Content } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import List, { Item, Text } from '@smui/list';

  let open = false;
  let clicked: string | number = 'Nothing yet.';
</script>
