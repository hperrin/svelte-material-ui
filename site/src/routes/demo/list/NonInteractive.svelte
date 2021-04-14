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

<script>
  import List, { Item, Separator, Text } from '@smui/list';
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }
</style>
