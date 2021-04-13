<h6 class="demo-title">With a List</h6>
<Card style="width: 320px;">
  <Content component={List}>
    <Item on:click={() => clicked++}>
      <Text>A card with a list as content.</Text>
    </Item>
    {#each [...Array(5)].map((v, i) => i + 1) as item}
      <Item on:click={() => clicked++}>
        <Text>Item #{item}</Text>
      </Item>
    {/each}
  </Content>
</Card>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Card, { Content } from '@smui/card';
  import List, { Item, Text } from '@smui/list';

  let clicked = 0;
</script>
