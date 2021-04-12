<svelte:head>
  <title>Button - SMUI</title>
</svelte:head>

<section>
  <h2>Button</h2>

  <div>
    <Button on:click={() => clicked++}><Label>Default</Label></Button>
    <Button on:click={() => clicked++} disabled><Label>Disabled</Label></Button>
    <Button on:click={() => clicked++} ripple={false}
      ><Label>No Ripple</Label></Button
    >
    <Button on:click={() => clicked++} variant="raised"
      ><Label>Raised</Label></Button
    >
    <Button on:click={() => clicked++} variant="unelevated"
      ><Label>Unelevated</Label></Button
    >
    <Button on:click={() => clicked++} variant="outlined"
      ><Label>Outlined</Label></Button
    >
    <Button on:click={() => clicked++} class="myClass"
      ><Label>With a Class</Label></Button
    >
    <Button on:click={() => clicked++} href="http://example.com" target="_blank"
      ><Label>Link</Label></Button
    >
  </div>

  <div>
    <Button on:click={() => clicked++}
      ><Icon class="material-icons">favorite</Icon><Label>Icon</Label></Button
    >
    <Button on:click={() => clicked++}
      ><Label>Trailing Icon</Label><Icon class="material-icons">favorite</Icon
      ></Button
    >
  </div>

  <pre class="status">Clicked: {clicked}</pre>

  <div>
    <h6 class="demo-title">Increased touch target</h6>
    <Button on:click={() => touchClicked++} touch><Label>Default</Label></Button
    >
    <Button on:click={() => touchClicked++} touch variant="raised"
      ><Label>Raised</Label></Button
    >
    <Button on:click={() => touchClicked++} touch variant="unelevated"
      ><Label>Unelevated</Label></Button
    >
    <Button on:click={() => touchClicked++} touch variant="outlined"
      ><Label>Outlined</Label></Button
    >
    <Button
      on:click={() => touchClicked++}
      touch
      href="http://example.com"
      target="_blank"><Label>Link</Label></Button
    >
  </div>

  <pre class="status">Clicked: {touchClicked}</pre>

  <div>
    <h6 class="demo-title">Secondary color</h6>
    <Button color="secondary" on:click={() => secondaryClicked++}
      ><Label>Default</Label></Button
    >
    <Button color="secondary" on:click={() => secondaryClicked++} disabled
      ><Label>Disabled</Label></Button
    >
    <Button color="secondary" on:click={() => secondaryClicked++} ripple={false}
      ><Label>No Ripple</Label></Button
    >
    <Button
      color="secondary"
      on:click={() => secondaryClicked++}
      variant="raised"><Label>Raised</Label></Button
    >
    <Button
      color="secondary"
      on:click={() => secondaryClicked++}
      variant="unelevated"><Label>Unelevated</Label></Button
    >
    <Button
      color="secondary"
      on:click={() => secondaryClicked++}
      variant="outlined"><Label>Outlined</Label></Button
    >
    <Button
      color="secondary"
      on:click={() => secondaryClicked++}
      class="myClass"><Label>With a Class</Label></Button
    >
    <Button
      color="secondary"
      on:click={() => secondaryClicked++}
      href="http://example.com"
      target="_blank"><Label>Link</Label></Button
    >
  </div>

  <div>
    <Button color="secondary" on:click={() => secondaryClicked++}
      ><Icon class="material-icons">favorite</Icon><Label>Icon</Label></Button
    >
    <Button color="secondary" on:click={() => secondaryClicked++}
      ><Label>Trailing Icon</Label><Icon class="material-icons">favorite</Icon
      ></Button
    >
  </div>

  <pre class="status">Clicked: {secondaryClicked}</pre>

  <div>
    <h6 class="demo-title">Button groups</h6>
    <Group>
      <Button on:click={() => groupsClicked++}><Label>One</Label></Button>
      <Button on:click={() => groupsClicked++}><Label>Two</Label></Button>
      <Button on:click={() => groupsClicked++}><Label>Three</Label></Button>
    </Group>
    <Group variant="raised">
      <Button on:click={() => groupsClicked++} variant="raised"
        ><Label>One</Label></Button
      >
      <Button on:click={() => groupsClicked++} variant="raised"
        ><Label>Two</Label></Button
      >
      <Button on:click={() => groupsClicked++} variant="raised"
        ><Label>Three</Label></Button
      >
    </Group>
    <Group variant="unelevated">
      <Button on:click={() => groupsClicked++} variant="unelevated"
        ><Label>One</Label></Button
      >
      <Button on:click={() => groupsClicked++} variant="unelevated"
        ><Label>Two</Label></Button
      >
      <Button on:click={() => groupsClicked++} variant="unelevated"
        ><Label>Three</Label></Button
      >
    </Group>
    <Group variant="outlined">
      <Button on:click={() => groupsClicked++} variant="outlined"
        ><Label>One</Label></Button
      >
      <Button on:click={() => groupsClicked++} variant="outlined"
        ><Label>Two</Label></Button
      >
      <Button on:click={() => groupsClicked++} variant="outlined"
        ><Label>Three</Label></Button
      >
    </Group>

    <br /> <br />

    <Group variant="outlined" style="display: flex; justify-content: stretch;">
      <Button
        on:click={() => groupsClicked++}
        variant="unelevated"
        color="primary"
        style="width: 60%;"><Label>Primary</Label></Button
      >
      <Button
        on:click={() => groupsClicked++}
        variant="unelevated"
        color="secondary"><Label>Secondary</Label></Button
      >
      <Button
        on:click={() => groupsClicked++}
        variant="unelevated"
        color="secondary"><Label>Secondary</Label></Button
      >
    </Group>
  </div>

  <pre class="status">Clicked: {groupsClicked}</pre>

  <div>
    <h6 class="demo-title">Split buttons using a button group</h6>
    <Group variant="raised">
      <Button on:click={() => splitClicked++} variant="raised"
        ><Label>Do the thing</Label></Button
      >
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
            <Item on:SMUI:action={() => splitClicked++}
              ><Text>Thing 1</Text></Item
            >
            <Item on:SMUI:action={() => splitClicked++}
              ><Text>Thing 2</Text></Item
            >
            <Separator />
            <Item on:SMUI:action={() => splitClicked++}
              ><Text>Thing 3</Text></Item
            >
          </List>
        </Menu>
      </div>
    </Group>
    <Group variant="outlined">
      <Button on:click={() => splitClicked++} variant="outlined"
        ><Label>Do the thing</Label></Button
      >
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
            <Item on:SMUI:action={() => splitClicked++}
              ><Text>Thing 1</Text></Item
            >
            <Item on:SMUI:action={() => splitClicked++}
              ><Text>Thing 2</Text></Item
            >
            <Separator />
            <Item on:SMUI:action={() => splitClicked++}
              ><Text>Thing 3</Text></Item
            >
          </List>
        </Menu>
      </div>
    </Group>
  </div>

  <pre class="status">Clicked: {splitClicked}</pre>

  <div>
    <h6 class="demo-title">Creating rounded buttons with Sass mixins</h6>
    <Button
      on:click={() => roundClicked++}
      variant="raised"
      class="button-shaped-round"><Label>Raised</Label></Button
    >
    <Button
      on:click={() => roundClicked++}
      variant="unelevated"
      class="button-shaped-round"><Label>Unelevated</Label></Button
    >
    <Button
      on:click={() => roundClicked++}
      variant="outlined"
      class="button-shaped-round"><Label>Outlined</Label></Button
    >
    <Button
      on:click={() => roundClicked++}
      variant="unelevated"
      class="button-shaped-round"
      ><Icon class="material-icons">favorite</Icon><Label>Icon</Label></Button
    >
    <Button
      on:click={() => roundClicked++}
      variant="outlined"
      class="button-shaped-round"
      ><Label>Trailing Icon</Label><Icon class="material-icons">favorite</Icon
      ></Button
    >
  </div>

  <pre class="status">Clicked: {roundClicked}</pre>

  <div>
    <h6 class="demo-title">Creating notched buttons with vanilla Sass</h6>
    <Button
      on:click={() => notchClicked++}
      variant="raised"
      class="button-shaped-notch"><Label>Raised</Label></Button
    >
    <Button
      on:click={() => notchClicked++}
      variant="unelevated"
      class="button-shaped-notch"><Label>Unelevated</Label></Button
    >
    <Button
      on:click={() => notchClicked++}
      variant="unelevated"
      class="button-shaped-notch"
      ><Icon class="material-icons">favorite</Icon><Label>Icon</Label></Button
    >
    <Button
      on:click={() => notchClicked++}
      variant="unelevated"
      class="button-shaped-notch"
      ><Label>Trailing Icon</Label><Icon class="material-icons">favorite</Icon
      ></Button
    >
  </div>

  <pre class="status">Clicked: {notchClicked}</pre>
</section>

<script>
  import './button.scss';
  import Button, { Group, GroupItem, Label, Icon } from '@smui/button';
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';

  let clicked = 0;
  let touchClicked = 0;
  let secondaryClicked = 0;
  let groupsClicked = 0;
  let splitClicked = 0;
  let roundClicked = 0;
  let notchClicked = 0;
  let menu;
  let menu2;
</script>

<style>
  * :global(.myClass) {
    font-family: 'Roboto Mono', monospace !important;
  }

  * :global(.mdc-button, .smui-button__group) {
    margin-bottom: 0.4em;
  }

  * :global(.smui-button__group .mdc-button) {
    margin-bottom: 0;
  }
</style>
