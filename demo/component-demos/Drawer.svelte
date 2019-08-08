<section>
  <h2>Drawers</h2>

  <div>
    A permanent drawer.

    <div class="drawer-container">
      <Drawer>
        <Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => clicked = 'Gray Kittens'}>
              <Text>Gray Kittens</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'A Space Rocket'}>
              <Text>A Space Rocket</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = '100 Pounds of Gravel'}>
              <Text>100 Pounds of Gravel</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'All of the Shrimp'}>
              <Text>All of the Shrimp</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'A Planet with a Mall'}>
              <Text>A Planet with a Mall</Text>
            </Item>
          </List>
        </Content>
      </Drawer>

      <AppContent class="app-content">
        <main class="main-content">
          App content.
          <br />
          <div class="status">Clicked: {clicked}</div>
        </main>
      </AppContent>
    </div>
  </div>

  <div>
    A dismissible drawer with a header and activated items.

    <div class="drawer-container">
      <Drawer variant="dismissible" bind:this={myDrawer} bind:open={myDrawerOpen}>
        <Header>
          <Title>Super Drawer</Title>
          <Subtitle>It's the best drawer.</Subtitle>
        </Header>
        <Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => setActive('Gray Kittens')} activated={active === 'Gray Kittens'}>
              <Text>Gray Kittens</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('A Space Rocket')} activated={active === 'A Space Rocket'}>
              <Text>A Space Rocket</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('100 Pounds of Gravel')} activated={active === '100 Pounds of Gravel'}>
              <Text>100 Pounds of Gravel</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('All of the Shrimp')} activated={active === 'All of the Shrimp'}>
              <Text>All of the Shrimp</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('A Planet with a Mall')} activated={active === 'A Planet with a Mall'}>
              <Text>A Planet with a Mall</Text>
            </Item>
          </List>
        </Content>
      </Drawer>

      <AppContent class="app-content">
        <main class="main-content">
          <Button on:click={() => myDrawerOpen = !myDrawerOpen}><Label>Toggle Drawer</Label></Button>
          <br />
          <div class="status">Active: {active}</div>
        </main>
      </AppContent>
    </div>
  </div>

  <div>
    A modal drawer with header, activated items, subheading, icons, list groups.

    <div class="drawer-container">
      <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>
        <Header>
          <Title>Super Mail</Title>
          <Subtitle>It's the best fake mail app drawer.</Subtitle>
        </Header>
        <Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>
              <i use:Graphic class="material-icons" aria-hidden="true">inbox</i>
              <Text>Inbox</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Star')} activated={active2 === 'Star'}>
              <i use:Graphic class="material-icons" aria-hidden="true">star</i>
              <Text>Star</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Sent Mail')} activated={active2 === 'Sent Mail'}>
              <i use:Graphic class="material-icons" aria-hidden="true">send</i>
              <Text>Sent Mail</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Drafts')} activated={active2 === 'Drafts'}>
              <i use:Graphic class="material-icons" aria-hidden="true">drafts</i>
              <Text>Drafts</Text>
            </Item>

            <Separator nav />
            <Subheader component={H6}>Labels</Subheader>
            <Item href="javascript:void(0)" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>
              <i use:Graphic class="material-icons" aria-hidden="true">bookmark</i>
              <Text>Family</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>
              <i use:Graphic class="material-icons" aria-hidden="true">bookmark</i>
              <Text>Friends</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>
              <i use:Graphic class="material-icons" aria-hidden="true">bookmark</i>
              <Text>Work</Text>
            </Item>
          </List>
        </Content>
      </Drawer>

      <Scrim />
      <AppContent class="app-content">
        <main class="main-content">
          <Button on:click={() => myDrawer2Open = !myDrawer2Open}><Label>Toggle Drawer</Label></Button>
          <br />
          <div class="status">Active: {active2}</div>
          <div style="height: 700px;">&nbsp;</div>
          And some stuff at the bottom.
        </main>
      </AppContent>
    </div>
  </div>
</section>

<script>
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from 'svelte-material-ui/components/drawer';
  import Button, {Label} from 'svelte-material-ui/components/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from 'svelte-material-ui/components/list';
  import H6 from 'svelte-material-ui/components/common/H6.svelte';

  let clicked = 'nothing yet';
  let myDrawer;
  let myDrawerOpen = false;
  let active = 'Gray Kittens';
  let myDrawer2;
  let myDrawer2Open = false;
  let active2 = 'Inbox';

  function setActive(value) {
    active = value;
    myDrawerOpen = false;
  }

  function setActive2(value) {
    active2 = value;
    myDrawer2Open = false;
  }
</script>

<style>
  .drawer-container {
    position: relative;
    display: flex;
    height: 350px;
    max-width: 600px;
    border: 1px solid rgba(0,0,0,.1);
    overflow: hidden;
    z-index: 0;
  }

  * :global(.mdc-drawer--modal, .mdc-drawer-scrim) {
    /* This is not needed for a page-wide modal. */
    position: absolute;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>