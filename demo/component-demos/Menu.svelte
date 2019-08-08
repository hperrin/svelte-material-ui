<section>
  <h2>Menu</h2>

  <div>
    <Menu static>
      <List>
        <Item on:SMUI:action={() => clicked = 'Cut'}><span use:Text>Cut</span></Item>
        <Item on:SMUI:action={() => clicked = 'Copy'}><span use:Text>Copy</span></Item>
        <Item on:SMUI:action={() => clicked = 'Paste'}><span use:Text>Paste</span></Item>
        <Separator />
        <Item on:SMUI:action={() => clicked = 'Delete'}><span use:Text>Delete</span></Item>
      </List>
    </Menu>
  </div>

  <div>
    Anchored automatically, corner set to bottom-left:

    <div style="min-width: 100px;">
      <Button on:click={() => menu.setOpen(true)}>Open Menu</Button>
      <Menu bind:this={menu} anchorCorner="BOTTOM_LEFT">
        <List>
          <Item on:SMUI:action={() => clicked = 'Cut'}><span use:Text>Cut</span></Item>
          <Item on:SMUI:action={() => clicked = 'Copy'}><span use:Text>Copy</span></Item>
          <Item on:SMUI:action={() => clicked = 'Paste'}><span use:Text>Paste</span></Item>
          <Separator />
          <Item on:SMUI:action={() => clicked = 'Delete'}><span use:Text>Delete</span></Item>
        </List>
      </Menu>
    </div>
  </div>

  <div>
    Two line, anchored manually:

    <div use:Anchor bind:this={anchor2}>
      <Button on:click={() => menu2.setOpen(true)}>Open Menu</Button>
      <Menu bind:this={menu2} anchor={false} bind:anchorElement={anchor2}>
        <List twoLine>
          <Item on:SMUI:action={() => clicked = 'Cut'}>
            <span use:Text>
              <span use:Text={'primary'}>Cut</span>
              <span use:Text={'secondary'}>Copy to clipboard and remove.</span>
            </span>
          </Item>
          <Item on:SMUI:action={() => clicked = 'Copy'}>
            <span use:Text>
              <span use:Text={'primary'}>Copy</span>
              <span use:Text={'secondary'}>Copy to clipboard.</span>
            </span>
          </Item>
          <Item on:SMUI:action={() => clicked = 'Paste'}>
            <span use:Text>
              <span use:Text={'primary'}>Paste</span>
              <span use:Text={'secondary'}>Paste from clipboard.</span>
            </span>
          </Item>
          <Separator />
          <Item on:SMUI:action={() => clicked = 'Delete'}>
            <span use:Text>
              <span use:Text={'primary'}>Delete</span>
              <span use:Text={'secondary'}>Remove item.</span>
            </span>
          </Item>
        </List>
      </Menu>
    </div>
  </div>

  <div class="status">Clicked: {clicked}</div>

  <div>
    Selection groups:

    <div style="min-width: 100px;">
      <Button on:click={() => menu3.setOpen(true)}>Open Menu</Button>
      <Menu bind:this={menu3}>
        <List>
          <SelectionGroup>
            {#each ['Red', 'Green', 'Blue'] as item}
              <Item on:SMUI:action={() => selected1 = item} selected={selected1 === item}>
                <span use:Graphic use:SelectionGroupIcon>
                  <i class="material-icons">check</i>
                </span>
                <span use:Text>{item}</span>
              </Item>
            {/each}
          </SelectionGroup>
          <Separator />
          <SelectionGroup>
            {#each ['Small', 'Medium', 'Large'] as item}
              <Item on:SMUI:action={() => selected2 = item} selected={selected2 === item}>
                <span use:Graphic use:SelectionGroupIcon>
                  <i class="material-icons">check</i>
                </span>
                <span use:Text>{item}</span>
              </Item>
            {/each}
          </SelectionGroup>
          <Separator />
          <Item on:SMUI:action={() => clicked2 = 'Save for Later'}>
            <span use:Text>Save for Later</span>
          </Item>
        </List>
      </Menu>
    </div>
  </div>

  <div class="status">Selection 1: {selected1}</div>

  <div class="status">Selection 2: {selected2}</div>

  <div class="status">Clicked: {clicked2}</div>
</section>

<script>
  import Menu, {SelectionGroup, SelectionGroupIcon} from 'svelte-material-ui/components/menu';
  import {Anchor} from 'svelte-material-ui/components/menu-surface';
  import List, {Item, Separator, Text, Graphic} from 'svelte-material-ui/components/list';
  import Button from 'svelte-material-ui/components/button';

  let menu;
  let menu2;
  let menu3;
  let anchor2;
  let clicked = 'nothing yet';
  let clicked2 = 'nothing yet';
  let selected1 = 'Red';
  let selected2 = 'Small';
</script>