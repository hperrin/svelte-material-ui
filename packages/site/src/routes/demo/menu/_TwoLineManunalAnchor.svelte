<div
  class={Object.keys(anchorClasses).join(' ')}
  use:Anchor={{
    addClass: (className) => {
      if (!anchorClasses[className]) {
        anchorClasses[className] = true;
      }
    },
    removeClass: (className) => {
      if (anchorClasses[className]) {
        delete anchorClasses[className];
        anchorClasses = anchorClasses;
      }
    },
  }}
  bind:this={anchor}
>
  <Button on:click={() => menu.setOpen(true)}>
    <Label>Open Menu</Label>
  </Button>
  <Menu
    bind:this={menu}
    anchor={false}
    bind:anchorElement={anchor}
    anchorCorner="BOTTOM_LEFT"
  >
    <List twoLine>
      <Item on:SMUI:action={() => (clicked = 'Cut')}>
        <Text>
          <PrimaryText>Cut</PrimaryText>
          <SecondaryText>Copy to clipboard and remove.</SecondaryText>
        </Text>
      </Item>
      <Item on:SMUI:action={() => (clicked = 'Copy')}>
        <Text>
          <PrimaryText>Copy</PrimaryText>
          <SecondaryText>Copy to clipboard.</SecondaryText>
        </Text>
      </Item>
      <Item on:SMUI:action={() => (clicked = 'Paste')}>
        <Text>
          <PrimaryText>Paste</PrimaryText>
          <SecondaryText>Paste from clipboard.</SecondaryText>
        </Text>
      </Item>
      <Separator />
      <Item on:SMUI:action={() => (clicked = 'Delete')}>
        <Text>
          <PrimaryText>Delete</PrimaryText>
          <SecondaryText>Remove item.</SecondaryText>
        </Text>
      </Item>
    </List>
  </Menu>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Menu from '@smui/menu';
  import { Anchor } from '@smui/menu-surface';
  import List, {
    Item,
    Separator,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';
  import Button, { Label } from '@smui/button';

  let menu: Menu;
  let anchor: HTMLDivElement;
  let anchorClasses: { [k: string]: boolean } = {};
  let clicked = 'nothing yet';
</script>
