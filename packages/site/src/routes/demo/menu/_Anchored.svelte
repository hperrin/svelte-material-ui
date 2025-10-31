<div style="min-width: 100px;">
  <Button onclick={() => menu.setOpen(true)}>
    <Label>Open Menu</Label>
  </Button>
  <Menu bind:this={menu}>
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
  </Menu>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import Button, { Label } from '@smui/button';

  let menu: Menu;
  let clicked = $state('nothing yet');
</script>
