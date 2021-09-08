<div>
  <List class="demo-list" dense>
    <Item on:SMUI:action={() => (clicked = 'Edit')}>
      <Graphic class="material-icons">edit</Graphic>
      <Text>Edit</Text>
    </Item>
    <Item on:SMUI:action={() => (clicked = 'Send')}>
      <Graphic class="material-icons">send</Graphic>
      <Text>Send</Text>
    </Item>
    <Item on:SMUI:action={() => (clicked = 'Archive')}>
      <Graphic class="material-icons">archive</Graphic>
      <Text>Archive</Text>
    </Item>
    <Separator />
    <Item on:SMUI:action={() => (clicked = 'Delete')}>
      <Graphic class="material-icons">clear</Graphic>
      <Text>Delete</Text>
    </Item>
  </List>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import List, { Item, Graphic, Separator, Text } from '@smui/list';

  let clicked = 'nothing yet';
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }
</style>
