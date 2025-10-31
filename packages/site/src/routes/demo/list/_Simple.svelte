<div>
  <List class="demo-list">
    <Item onSMUIAction={() => (clicked = 'Cut')}><Text>Cut</Text></Item>
    <Item onSMUIAction={() => (clicked = 'Copy')}><Text>Copy</Text></Item>
    <Item onSMUIAction={() => (clicked = 'Paste')}><Text>Paste</Text></Item>
    <Separator />
    <Item onSMUIAction={() => (clicked = 'Delete')}><Text>Delete</Text></Item>
  </List>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import List, { Item, Separator, Text } from '@smui/list';

  let clicked = $state('nothing yet');
</script>

<style>
  * :global(.demo-list) {
    max-width: 300px;
  }
</style>
