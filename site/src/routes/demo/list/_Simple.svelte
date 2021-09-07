<div>
  <List class="demo-list">
    <Item on:SMUI:action={() => (clicked = 'Cut')}><Text>Cut</Text></Item>
    <Item on:SMUI:action={() => (clicked = 'Copy')}><Text>Copy</Text></Item>
    <Item on:SMUI:action={() => (clicked = 'Paste')}><Text>Paste</Text></Item>
    <Separator />
    <Item on:SMUI:action={() => (clicked = 'Delete')}><Text>Delete</Text></Item>
  </List>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import List, { Item, Separator, Text } from '@smui/list';

  let clicked = 'nothing yet';
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }
</style>
