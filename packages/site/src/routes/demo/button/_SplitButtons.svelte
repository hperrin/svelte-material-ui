<Group variant="raised">
  <Button on:click={() => clicked++} variant="raised">
    <Label>Do the thing</Label>
  </Button>
  <div use:GroupItem>
    <Button
      on:click={() => menu.setOpen(true)}
      variant="raised"
      style="padding: 0; min-width: 36px;"
    >
      <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
    </Button>
    <Menu bind:this={menu} anchorCorner="TOP_LEFT">
      <List>
        <Item on:SMUI:action={() => clicked++}>
          <Text>Thing 1</Text>
        </Item>
        <Item on:SMUI:action={() => clicked++}>
          <Text>Thing 2</Text>
        </Item>
        <Separator />
        <Item on:SMUI:action={() => clicked++}>
          <Text>Thing 3</Text>
        </Item>
      </List>
    </Menu>
  </div>
</Group>

<Group variant="outlined">
  <Button on:click={() => clicked++} variant="outlined">
    <Label>Do the thing</Label>
  </Button>
  <div use:GroupItem>
    <Button
      on:click={() => menu2.setOpen(true)}
      variant="outlined"
      style="padding: 0; min-width: 36px;"
    >
      <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
    </Button>
    <Menu bind:this={menu2} anchorCorner="TOP_LEFT">
      <List>
        <Item on:SMUI:action={() => clicked++}>
          <Text>Thing 1</Text>
        </Item>
        <Item on:SMUI:action={() => clicked++}>
          <Text>Thing 2</Text>
        </Item>
        <Separator />
        <Item on:SMUI:action={() => clicked++}>
          <Text>Thing 3</Text>
        </Item>
      </List>
    </Menu>
  </div>
</Group>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Group, GroupItem, Label, Icon } from '@smui/button';
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';

  let clicked = 0;
  let menu: Menu;
  let menu2: Menu;
</script>
