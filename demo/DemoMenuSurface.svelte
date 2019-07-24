<section>
  <h2>Menu Surface</h2>

  <div>
    <MenuSurface anchor static>
      <List>
        <Item on:SMUI:action={() => clicked = 'Cut'}><span use:Text>Cut</span></Item>
        <Item on:SMUI:action={() => clicked = 'Copy'}><span use:Text>Copy</span></Item>
        <Item on:SMUI:action={() => clicked = 'Paste'}><span use:Text>Paste</span></Item>
        <Separator />
        <Item on:SMUI:action={() => clicked = 'Delete'}><span use:Text>Delete</span></Item>
      </List>
    </MenuSurface>
  </div>

  <div>
    Anchored automatically, corner set to bottom-left:

    <div style="min-width: 100px;">
      <Button on:click={() => menu.setOpen(true)}>Open Menu</Button>
      <MenuSurface bind:this={menu} anchor>
        <List>
          <Item on:SMUI:action={() => clicked = 'Cut'}><span use:Text>Cut</span></Item>
          <Item on:SMUI:action={() => clicked = 'Copy'}><span use:Text>Copy</span></Item>
          <Item on:SMUI:action={() => clicked = 'Paste'}><span use:Text>Paste</span></Item>
          <Separator />
          <Item on:SMUI:action={() => clicked = 'Delete'}><span use:Text>Delete</span></Item>
        </List>
      </MenuSurface>
    </div>
  </div>

  <div>
    Anchored manually:

    <div use:Anchor bind:this={anchor2}>
      <Button on:click={() => menu2.setOpen(true)}>Open Menu</Button>
      <MenuSurface bind:this={menu2} bind:anchorElement={anchor2}>
        <List>
          <Item on:SMUI:action={() => clicked = 'Cut'}><span use:Text>Cut</span></Item>
          <Item on:SMUI:action={() => clicked = 'Copy'}><span use:Text>Copy</span></Item>
          <Item on:SMUI:action={() => clicked = 'Paste'}><span use:Text>Paste</span></Item>
          <Separator />
          <Item on:SMUI:action={() => clicked = 'Delete'}><span use:Text>Delete</span></Item>
        </List>
      </MenuSurface>
    </div>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import MenuSurface, {Anchor} from '../components/menu-surface';
  import List, {Item, Separator, Text} from '../components/list';
  import Button from '../components/button';

  let menu;
  let menu2;
  let anchor2;
  let clicked = 'nothing yet';

  $: if (menu) {
    // https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/constants.ts
    menu.setAnchorCorner(1);
  }
</script>