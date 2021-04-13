<h6 class="demo-title">With a List</h6>

<div style="display: flex; flex-wrap: wrap;">
  <div class="card-container">
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
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Card, { Content } from '@smui/card';
  import List, { Item, Text } from '@smui/list';

  let clicked = 0;
</script>

<style>
  .card-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    min-width: 380px;
    background-color: #f8f8f8;
    margin-right: 20px;
    margin-bottom: 20px;
  }
</style>
