<div>
  <List class="demo-list" dense>
    <Item onSMUIAction={() => (clicked = 'Edit')}>
      <Graphic class="material-icons">edit</Graphic>
      <Text>Edit</Text>
    </Item>
    <Item onSMUIAction={() => (clicked = 'Send')}>
      <Graphic class="material-icons">send</Graphic>
      <Text>Send</Text>
    </Item>
    <Item onSMUIAction={() => (clicked = 'Archive')}>
      <Graphic class="material-icons">archive</Graphic>
      <Text>Archive</Text>
    </Item>
    <Separator />
    <Item onSMUIAction={() => (clicked = 'Delete')}>
      <Graphic class="material-icons">clear</Graphic>
      <Text>Delete</Text>
    </Item>
  </List>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import List, { Item, Graphic, Separator, Text } from '@smui/list';

  let clicked = 'nothing yet';
</script>

<style>
  * :global(.demo-list) {
    max-width: 300px;
  }
</style>
