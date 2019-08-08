<section>
  <h2>Menu Surface</h2>

  <div>
    <MenuSurface static style="max-width: 350px;">
      <p style="margin: 1em;">
        This is a menu surface. I don't know why this is its own MDC component.
        It's just an incomplete version of Menu. I guess, since it can have
        other things in it than just lists. Like, this paragraph.
      </p>
    </MenuSurface>
  </div>

  <div>
    <MenuSurface static>
      <List>
        <Item on:SMUI:action={() => clicked = 'Cut'}><Text>Cut</Text></Item>
        <Item on:SMUI:action={() => clicked = 'Copy'}><Text>Copy</Text></Item>
        <Item on:SMUI:action={() => clicked = 'Paste'}><Text>Paste</Text></Item>
        <Separator />
        <Item on:SMUI:action={() => clicked = 'Delete'}><Text>Delete</Text></Item>
      </List>
    </MenuSurface>
  </div>

  <div>
    Anchored automatically, corner set to bottom-left:

    <div style="min-width: 100px;">
      <Button on:click={() => menu.setOpen(true)}>Open Menu Surface</Button>
      <MenuSurface bind:this={menu} anchorCorner="BOTTOM_LEFT">
        <List>
          <Item on:SMUI:action={() => clicked = 'Cut'}><Text>Cut</Text></Item>
          <Item on:SMUI:action={() => clicked = 'Copy'}><Text>Copy</Text></Item>
          <Item on:SMUI:action={() => clicked = 'Paste'}><Text>Paste</Text></Item>
          <Separator />
          <Item on:SMUI:action={() => clicked = 'Delete'}><Text>Delete</Text></Item>
        </List>
      </MenuSurface>
    </div>
  </div>

  <div>
    Anchored manually:

    <div use:Anchor bind:this={anchor2}>
      <Button on:click={() => menu2.setOpen(true)}>Open Menu Surface</Button>
      <MenuSurface bind:this={menu2} anchor={false} bind:anchorElement={anchor2}>
        <List>
          <Item on:SMUI:action={() => clicked = 'Cut'}><Text>Cut</Text></Item>
          <Item on:SMUI:action={() => clicked = 'Copy'}><Text>Copy</Text></Item>
          <Item on:SMUI:action={() => clicked = 'Paste'}><Text>Paste</Text></Item>
          <Separator />
          <Item on:SMUI:action={() => clicked = 'Delete'}><Text>Delete</Text></Item>
        </List>
      </MenuSurface>
    </div>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import MenuSurface, {Anchor} from 'svelte-material-ui/components/menu-surface';
  import List, {Item, Separator, Text} from 'svelte-material-ui/components/list';
  import Button from 'svelte-material-ui/components/button';

  let menu;
  let menu2;
  let anchor2;
  let clicked = 'nothing yet';
</script>