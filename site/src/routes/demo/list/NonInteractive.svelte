<h6 class="demo-title">A non-interactive list with activated item</h6>

<div>
  <List class="demo-list" nonInteractive>
    <Item ripple={false}><Text>Thing 1</Text></Item>
    <Separator />
    <Item ripple={false} activated><Text>Thing 2</Text></Item>
    <Item ripple={false}><Text>Thing 3</Text></Item>
    <Separator />
    <Item ripple={false}><Text>Thing 4</Text></Item>
  </List>
</div>

<script>
  import List, { Item, Separator, Text } from '@smui/list';
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
