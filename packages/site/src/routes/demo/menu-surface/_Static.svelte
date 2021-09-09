<MenuSurface static>
  <List>
    <Item on:SMUI:action={() => (clicked = 'Cut')}>
      <Text>Cut</Text>
    </Item>
    <Item on:SMUI:action={() => (clicked = 'Copy')}>
      <Text>Copy</Text>
    </Item>
    <Item on:SMUI:action={() => (clicked = 'Paste')}>
      <Text>Paste</Text>
    </Item>
    <Separator />
    <Item on:SMUI:action={() => (clicked = 'Delete')}>
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
