<div>
  <List class="demo-list">
    <Item on:SMUI:action={() => (clicked = 'Level 1 - 1')}>
      <Text>Level 1 - 1</Text>
    </Item>
    <Item on:SMUI:action={() => (clicked = 'Level 1 - 2')}>
      <Text>Level 1 - 2</Text>
    </Item>
    <Item on:SMUI:action={() => (clicked = 'Level 1 - 3')}>
      <Text>Level 1 - 3</Text>
    </Item>
    <Item wrapper>
      <List class="sub-list">
        <Item on:SMUI:action={() => (clicked = 'Level 2.1 - 1')}>
          <Text>Level 2.1 - 1</Text>
        </Item>
        <Item on:SMUI:action={() => (clicked = 'Level 2.1 - 2')}>
          <Text>Level 2.1 - 2</Text>
        </Item>
      </List>
    </Item>
    <Item on:SMUI:action={() => (clicked = 'Level 1 - 4')}>
      <Text>Level 1 - 4</Text>
    </Item>
    <Item wrapper>
      <List class="sub-list">
        <Item on:SMUI:action={() => (clicked = 'Level 2.2 - 1')}>
          <Text>Level 2.2 - 1</Text>
        </Item>
        <Item on:SMUI:action={() => (clicked = 'Level 2.2 - 2')}>
          <Text>Level 2.2 - 2</Text>
        </Item>
      </List>
    </Item>
  </List>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import List, { Item, Text } from '@smui/list';

  let clicked = 'nothing yet';
</script>

<style>
  * :global(.demo-list) {
    max-width: 300px;
  }
  * :global(.sub-list) {
    padding-left: 10px;
  }
</style>
