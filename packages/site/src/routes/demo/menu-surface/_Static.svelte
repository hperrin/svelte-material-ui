<MenuSurface static>
  <List>
    <Item onSMUIAction={() => (clicked = 'Cut')}>
      <Text>Cut</Text>
    </Item>
    <Item onSMUIAction={() => (clicked = 'Copy')}>
      <Text>Copy</Text>
    </Item>
    <Item onSMUIAction={() => (clicked = 'Paste')}>
      <Text>Paste</Text>
    </Item>
    <Separator />
    <Item onSMUIAction={() => (clicked = 'Delete')}>
      <Text>Delete</Text>
    </Item>
  </List>
</MenuSurface>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import MenuSurface from '@smui/menu-surface';
  import List, { Item, Separator, Text } from '@smui/list';

  let clicked = 'nothing yet';
</script>
