# Svelte Material UI - Drawer

Drawers are navigation areas.

See [MDC Drawer](https://material.io/develop/web/components/drawers/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-drawer/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/drawer
```

# Basic Usage

```html
<script>
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import List, {Item, Text, Separator, Subheader} from '@smui/list';
  import H6 from '@smui/common/H6.svelte';
  import {starred} from './store.js';

  let current = 'main';
  let drawer;
  let drawerOpen = false;

  function go(key) {
    current = key;
    drawerOpen = false;
  }
</script>

<Drawer variant="modal" bind:this={drawer} bind:open={drawerOpen}>
  <Header>
    <Title>App Title</Title>
    <Subtitle>App Subtitle</Subtitle>
  </Header>
  <Content>
    <List>
      <Item href="javascript:void(0)" on:click={() => go('main')} activated={current === 'main'}>
        <Text>Main</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('other')} activated={current === 'other'}>
        <Text>Other</Text>
      </Item>

      <Separator nav />
      <Subheader component={H6}>Starred</Subheader>
      {#each $starred as star}
        <Item href="javascript:void(0)" on:click={() => go(star.key)} activated={current === star.key}>
          <Text>{star.name}</Text>
        </Item>
      {/each}
    </List>
  </Content>
</Drawer>

<Scrim />
<AppContent>
  <a on:click={() => drawerOpen = !drawerOpen}>Toggle Drawer</a>
  <br />
  {#if current === 'main'}
    ...
  {/if}
</AppContent>
```

# Demo

*in action:* https://sveltematerialui.com/demo/drawer

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/drawer.svelte

# Exports

todo...