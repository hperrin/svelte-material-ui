# Svelte Material UI - Drawer

Drawers are navigation areas.

# Installation

```sh
npm install --save-dev @smui/drawer
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/drawer)

[See the demo code.](/site/src/routes/demo/drawer/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Drawer variant="modal" bind:this={drawer} bind:open={drawerOpen}>
  <Header>
    <Title>App Title</Title>
    <Subtitle>App Subtitle</Subtitle>
  </Header>
  <Content>
    <List>
      <Item
        href="javascript:void(0)"
        on:click={() => go('main')}
        activated={current === 'main'}
      >
        <Text>Main</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => go('other')}
        activated={current === 'other'}
      >
        <Text>Other</Text>
      </Item>

      <Separator />
      <Subheader component={H6}>Starred</Subheader>
      {#each $starred as star}
        <Item
          href="javascript:void(0)"
          on:click={() => go(star.key)}
          activated={current === star.key}
        >
          <Text>{star.name}</Text>
        </Item>
      {/each}
    </List>
  </Content>
</Drawer>

<Scrim />
<AppContent>
  <a on:click={() => (drawerOpen = !drawerOpen)}>Toggle Drawer</a>
  <br />
  {#if current === 'main'}
    ...
  {/if}
</AppContent>

<script>
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim,
  } from '@smui/drawer';
  import List, { Item, Text, Separator, Subheader } from '@smui/list';
  import H6 from '@smui/common/H6.svelte';
  import { starred } from './store.js';

  let current = 'main';
  let drawer;
  let drawerOpen = false;

  function go(key) {
    current = key;
    drawerOpen = false;
  }
</script>
```

# Exports

todo...

# More Information

See [Navigation drawer](https://material.io/components/navigation-drawer) in the Material design spec.

See [Drawer](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-drawer) in MDC-Web for information about the upstream library's architecture.
