<section>
  <h2>Drawers</h2>

  <div>
    A permanent drawer.

    <div class="drawer-container">
      <Drawer>
        <div use:Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => clicked = 'Gray Kittens'}>
              <span use:Text>Gray Kittens</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'A Space Rocket'}>
              <span use:Text>A Space Rocket</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = '100 Pounds of Gravel'}>
              <span use:Text>100 Pounds of Gravel</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'All of the Shrimp'}>
              <span use:Text>All of the Shrimp</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => clicked = 'A Planet with a Mall'}>
              <span use:Text>A Planet with a Mall</span>
            </Item>
          </List>
        </div>
      </Drawer>

      <div use:AppContent class="app-content">
        <main class="main-content">
          App content.
        </main>
      </div>
    </div>
  </div>

  <div class="status">Clicked: {clicked}</div>

  <div>
    A dismissible drawer with a header and activated items.

    <div class="drawer-container">
      <Drawer variant="dismissible" bind:this={myDrawer} bind:open={myDrawerOpen}>
        <div use:Header>
          <h1 use:Title>Super Drawer</h1>
          <h2 use:Subtitle>It's the best drawer.</h2>
        </div>
        <div use:Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => setActive('Gray Kittens')} activated={active === 'Gray Kittens'}>
              <span use:Text>Gray Kittens</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('A Space Rocket')} activated={active === 'A Space Rocket'}>
              <span use:Text>A Space Rocket</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('100 Pounds of Gravel')} activated={active === '100 Pounds of Gravel'}>
              <span use:Text>100 Pounds of Gravel</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('All of the Shrimp')} activated={active === 'All of the Shrimp'}>
              <span use:Text>All of the Shrimp</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('A Planet with a Mall')} activated={active === 'A Planet with a Mall'}>
              <span use:Text>A Planet with a Mall</span>
            </Item>
          </List>
        </div>
      </Drawer>

      <div use:AppContent class="app-content">
        <main class="main-content">
          <Button on:click={() => myDrawerOpen = !myDrawerOpen}><Label>Toggle Drawer</Label></Button>
          <br />
          <div class="status">Active: {active}</div>
        </main>
      </div>
    </div>
  </div>

  <div>
    A modal drawer with header, activated items, subheading, icons, list groups.

    <div class="drawer-container">
      <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>
        <div use:Header>
          <h1 use:Title>Super Mail</h1>
          <h2 use:Subtitle>It's the best fake mail app drawer.</h2>
        </div>
        <div use:Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>
              <i use:Graphic class="material-icons" aria-hidden="true">inbox</i>
              <span use:Text>Inbox</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Star')} activated={active2 === 'Star'}>
              <i use:Graphic class="material-icons" aria-hidden="true">star</i>
              <span use:Text>Star</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Sent Mail')} activated={active2 === 'Sent Mail'}>
              <i use:Graphic class="material-icons" aria-hidden="true">send</i>
              <span use:Text>Sent Mail</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Drafts')} activated={active2 === 'Drafts'}>
              <i use:Graphic class="material-icons" aria-hidden="true">drafts</i>
              <span use:Text>Drafts</span>
            </Item>

            <Separator nav />
            <h6 use:Subheader>Labels</h6>
            <Item href="javascript:void(0)" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>
              <i use:Graphic class="material-icons" aria-hidden="true">bookmark</i>
              <span use:Text>Family</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>
              <i use:Graphic class="material-icons" aria-hidden="true">bookmark</i>
              <span use:Text>Friends</span>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>
              <i use:Graphic class="material-icons" aria-hidden="true">bookmark</i>
              <span use:Text>Work</span>
            </Item>
          </List>
        </div>
      </Drawer>

      <div use:Scrim />
      <div use:AppContent class="app-content">
        <main class="main-content">
          <Button on:click={() => myDrawer2Open = !myDrawer2Open}><Label>Toggle Drawer</Label></Button>
          <br />
          <div class="status">Active: {active2}</div>
          <div style="height: 700px;">&nbsp;</div>
          And some stuff at the bottom.
        </main>
      </div>
    </div>
  </div>
</section>

<script>
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from 'svelte-material-ui/components/drawer';
  import Button, {Label} from 'svelte-material-ui/components/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from 'svelte-material-ui/components/list';

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

  .app-content {
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