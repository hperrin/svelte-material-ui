<div>
  <List class="demo-list" nonInteractive>
    <Item><Text>Thing 1</Text></Item>
    <Separator />
    <Item activated><Text>Thing 2</Text></Item>
    <Item><Text>Thing 3</Text></Item>
    <Separator />
    <Item><Text>Thing 4</Text></Item>
  </List>
</div>

<script lang="ts">
  import List, { Item, Separator, Text } from '@smui/list';
</script>

<style>
  * :global(.demo-list) {
    max-width: 300px;
  }
</style>
