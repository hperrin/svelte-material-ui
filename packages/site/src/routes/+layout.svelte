<svelte:window on:resize={setMiniWindow} />

<svelte:head>
  <!-- SMUI Styles -->
  <link rel="stylesheet" href="{assets}/smui.css" />

  <!-- Site Styles -->
  <link rel="stylesheet" href="{assets}/site.css" />

  {#if theme}
    <!-- SMUI Styles -->
    <link rel="stylesheet" href="{assets}/smui-{theme}.css" />

    <!-- Site Styles -->
    <link rel="stylesheet" href="{assets}/site-{theme}.css" />

    {#if lightTheme === false}
      <!-- SMUI Styles -->
      <link
        rel="stylesheet"
        href="{assets}/smui-{theme}-dark.css"
        media="screen"
      />
      <!-- Site Styles -->
      <link
        rel="stylesheet"
        href="{assets}/site-{theme}-dark.css"
        media="screen"
      />
    {:else if lightTheme !== true}
      <!-- SMUI Styles -->
      <link
        rel="stylesheet"
        href="{assets}/smui-{theme}-dark.css"
        media="screen and (prefers-color-scheme: dark)"
      />

      <!-- Site Styles -->
      <link
        rel="stylesheet"
        href="{assets}/site-{theme}-dark.css"
        media="screen and (prefers-color-scheme: dark)"
      />
    {/if}
  {:else if lightTheme === false}
    <!-- SMUI Styles -->
    <link rel="stylesheet" href="{assets}/smui-dark.css" media="screen" />

    <!-- Site Styles -->
    <link rel="stylesheet" href="{assets}/site-dark.css" media="screen" />
  {:else if lightTheme !== true}
    <!-- SMUI Styles -->
    <link
      rel="stylesheet"
      href="{assets}/smui-dark.css"
      media="screen and (prefers-color-scheme: dark)"
    />

    <!-- Site Styles -->
    <link
      rel="stylesheet"
      href="{assets}/site-dark.css"
      media="screen and (prefers-color-scheme: dark)"
    />
  {/if}

  {#if !iframe}
    <!-- It Matters -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/itmatters@2.0.1/index.css"
    />
  {/if}
</svelte:head>

{#if iframe}
  <slot />
{:else}
  <TopAppBar variant="static" class="demo-top-app-bar">
    <Row>
      <Section>
        {#if miniWindow}
          <IconButton
            class="material-icons"
            on:click={() => (drawerOpen = !drawerOpen)}>menu</IconButton
          >
        {/if}
        <Title
          tag="a"
          href="/"
          on:click={() => (activeSection = undefined)}
          class="mdc-theme--on-surface"
          style={miniWindow ? 'padding-left: 0;' : ''}
        >
          {miniWindow ? 'SMUI' : 'Svelte Material UI'}
        </Title>
      </Section>
      <Section align="end" toolbar style="color: var(--mdc-on-surface, #000);">
        {#each (activeSection && activeSection.repos) || [] as repo}
          <IconButton
            href={repo}
            target="_blank"
            title="View Docs: {repo.split('/').slice(-1)[0]}"
          >
            <Icon tag="svg" viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiFileDocument} />
            </Icon>
          </IconButton>
        {:else}
          <IconButton
            href="https://github.com/hperrin/svelte-material-ui"
            title="SMUI on GitHub"
          >
            <Icon tag="svg" viewBox="0 0 24 24">
              <path fill="currentColor" d={siGithub.path} />
            </Icon>
          </IconButton>
        {/each}
        <IconButton
          href="https://discord.gg/aFzmkrmg9P"
          title="Join the Discord Server"
        >
          <Icon tag="svg" viewBox="0 0 24 24">
            <path fill="currentColor" d={siDiscord.path} />
          </Icon>
        </IconButton>
        <IconButton
          href="https://port87.social/@hperrin"
          title="Hunter Perrin (SMUI Author) on Mastodon"
        >
          <Icon tag="svg" viewBox="0 0 24 24">
            <path fill="currentColor" d={siMastodon.path} />
          </Icon>
        </IconButton>
        <div style="display: inline-block;">
          <IconButton
            on:click={() => themeMenu.setOpen(true)}
            title="Pick a theme or toggle dark mode."
          >
            <Icon tag="svg" viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiPalette} />
            </Icon>
          </IconButton>
          <Menu bind:this={themeMenu}>
            <List>
              <SelectionGroup>
                <Item
                  on:SMUI:action={() => (lightTheme = null)}
                  selected={lightTheme == null}
                >
                  <SelectionGroupIcon>
                    <i class="material-icons">check</i>
                  </SelectionGroupIcon>
                  <Text>Follow System</Text>
                </Item>
                {#each [{ label: 'Light', value: true }, { label: 'Dark', value: false }] as item}
                  <Item
                    on:SMUI:action={() => (lightTheme = item.value)}
                    selected={lightTheme === item.value}
                  >
                    <SelectionGroupIcon>
                      <i class="material-icons">check</i>
                    </SelectionGroupIcon>
                    <Text>{item.label}</Text>
                  </Item>
                {/each}
              </SelectionGroup>
              <Separator />
              <SelectionGroup>
                <Item
                  on:SMUI:action={() => (theme = null)}
                  selected={theme == null}
                >
                  <SelectionGroupIcon>
                    <i class="material-icons">check</i>
                  </SelectionGroupIcon>
                  <Text>Svelte</Text>
                </Item>
                {#each themes as item}
                  <Item
                    on:SMUI:action={() => (theme = item.value)}
                    selected={theme === item.value}
                  >
                    <SelectionGroupIcon>
                      <i class="material-icons">check</i>
                    </SelectionGroupIcon>
                    <Text>{item.label}</Text>
                  </Item>
                {/each}
              </SelectionGroup>
              <Separator />
              <Item tag="a" href="/THEMING.md" style="color: inherit;">
                <Text>Learn about theming</Text>
              </Item>
              <Item
                tag="a"
                href="https://github.com/hperrin/svelte-material-ui/tree/master/packages/site/src/theme"
                target="_blank"
                rel="noreferrer noorigin"
                style="color: inherit;"
              >
                <Text>See the theme source</Text>
              </Item>
            </List>
          </Menu>
        </div>
      </Section>
    </Row>
  </TopAppBar>
  <div class="drawer-container">
    <Drawer
      bind:this={drawer}
      variant={miniWindow ? 'modal' : undefined}
      bind:open={drawerOpen}
      class="demo-drawer mdc-theme--secondary-bg {miniWindow
        ? 'demo-drawer-adjust'
        : 'hide-initial-small'}"
    >
      <!-- 44px padding to offset the space taken by Glory to Ukraine and Trans Rights messages -->
      <Content style="padding-bottom: 44px;">
        <List>
          {#each sections as section (section.name)}
            {#if 'separator' in section}
              <Separator />
            {:else}
              <Item
                bind:this={section.component}
                nonInteractive={!('route' in section || 'shortcut' in section)}
                href={'route' in section
                  ? section.route
                  : 'shortcut' in section
                    ? section.shortcut
                    : undefined}
                activated={section === activeSection}
                style={section.indent
                  ? 'margin-left: ' + section.indent * 25 + 'px;'
                  : ''}
              >
                <Text class="mdc-theme--on-secondary">{section.name}</Text>
              </Item>
            {/if}
          {/each}
        </List>
      </Content>
    </Drawer>

    {#if miniWindow}
      <Scrim />
    {/if}
    <AppContent class="demo-app-content">
      <main class="demo-main-content" bind:this={mainContent}>
        <slot />
      </main>
    </AppContent>
  </div>
{/if}

<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { mdiFileDocument, mdiPalette } from '@mdi/js';
  import { siDiscord, siMastodon, siGithub } from 'simple-icons';
  import TinyGesture from 'tinygesture';
  import { assets } from '$app/paths';
  import { page } from '$app/stores';

  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Drawer, { Content, Scrim, AppContent } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import Menu, { SelectionGroup, SelectionGroupIcon } from '@smui/menu';
  import List, { Item, Text, Separator } from '@smui/list';
  import { Icon } from '@smui/common';

  const iframe = $page.url.pathname.includes('/iframe');

  let drawer: Drawer;
  let mainContent: HTMLElement;
  let miniWindow = false;
  let drawerOpen = false;
  let drawerGesture: TinyGesture;
  let mainContentGesture: TinyGesture;

  const themes = [
    { label: 'Material', value: 'material' },
    { label: 'Fixation', value: 'fixation' },
    { label: 'Metro', value: 'metro' },
    { label: 'Unity', value: 'unity' },
  ];
  let themeMenu: Menu;
  let lightTheme: boolean | null = null;
  let theme: string | null = null;

  type DemoSection = {
    component?: Item<string>; // Items always have href.
    name: string;
    route?: string;
    shortcut?: string;
    indent: number;
    repos?: string[];
  };
  const sections: (
    | DemoSection
    | {
        name: string;
        separator: true;
      }
  )[] = [
    {
      name: 'Installation',
      route: '/INSTALL.md',
      indent: 0,
    },
    {
      name: 'SvelteKit',
      route: '/SVELTEKIT.md',
      indent: 1,
    },
    {
      name: 'Theming',
      route: '/THEMING.md',
      indent: 0,
    },
    {
      name: 'Migrating',
      route: '/MIGRATING.md',
      indent: 0,
    },
    {
      name: 'sep1',
      separator: true,
    },
    {
      name: 'Quick Guide',
      route: '/demo/quick-guide/',
      indent: 0,
    },
    {
      name: 'sep2',
      separator: true,
    },
    {
      name: 'Accordion',
      route: '/demo/accordion/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/accordion',
      ],
    },
    {
      name: 'Action Buttons',
      indent: 0,
    },
    {
      name: 'Button',
      route: '/demo/button/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/button',
      ],
    },
    {
      name: 'Floating Action Button',
      route: '/demo/fab/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/fab',
      ],
    },
    {
      name: 'Icon Button',
      route: '/demo/icon-button/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/icon-button',
      ],
    },
    {
      name: 'App Bars',
      indent: 0,
    },
    {
      name: 'Bottom App Bar',
      route: '/demo/bottom-app-bar/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/bottom-app-bar',
      ],
    },
    {
      name: 'Top App Bar',
      route: '/demo/top-app-bar/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/top-app-bar',
      ],
    },
    {
      name: 'Badge',
      route: '/demo/badge/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/badge',
      ],
    },
    {
      name: 'Banner',
      route: '/demo/banner/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/banner',
      ],
    },
    {
      name: 'Cards',
      route: '/demo/card/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/card',
      ],
    },
    {
      name: 'Common',
      route: '/demo/common/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/common',
      ],
    },
    {
      name: 'Data Table',
      route: '/demo/data-table/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/data-table',
      ],
    },
    {
      name: 'Dialog',
      route: '/demo/dialog/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/dialog',
      ],
    },
    {
      name: 'Drawer',
      route: '/demo/drawer/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/drawer',
      ],
    },
    {
      name: 'Elevation',
      route: '/demo/elevation/',
      indent: 0,
    },
    {
      name: 'Image List',
      route: '/demo/image-list/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/image-list',
      ],
    },
    {
      name: 'Inputs and Controls',
      indent: 0,
    },
    {
      name: 'Autocomplete',
      route: '/demo/autocomplete/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/autocomplete',
      ],
    },
    {
      name: 'Checkbox',
      route: '/demo/checkbox/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/checkbox',
      ],
    },
    {
      name: 'Chips',
      route: '/demo/chips/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/chips',
      ],
    },
    {
      name: 'Form Field',
      route: '/demo/form-field/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/form-field',
      ],
    },
    {
      name: 'Radio Button',
      route: '/demo/radio/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/radio',
      ],
    },
    {
      name: 'Segmented Button',
      route: '/demo/segmented-button/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/segmented-button',
      ],
    },
    {
      name: 'Select Menu',
      route: '/demo/select/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/select',
      ],
    },
    {
      name: 'Slider',
      route: '/demo/slider/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/slider',
      ],
    },
    {
      name: 'Switch',
      route: '/demo/switch/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/switch',
      ],
    },
    {
      name: 'Text Field',
      route: '/demo/textfield/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/textfield',
      ],
    },
    {
      name: 'Layout Grid',
      route: '/demo/layout-grid/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/layout-grid',
      ],
    },
    {
      name: 'List',
      route: '/demo/list/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/list',
      ],
    },
    {
      name: 'Menu Surface',
      route: '/demo/menu-surface/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu-surface',
      ],
    },
    {
      name: 'Menu',
      route: '/demo/menu/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu',
      ],
    },
    {
      name: 'Paper',
      route: '/demo/paper/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/paper',
      ],
    },
    {
      name: 'Progress Indicators',
      indent: 0,
    },
    {
      name: 'Circular Progress',
      route: '/demo/circular-progress/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/circular-progress',
      ],
    },
    {
      name: 'Linear Progress',
      route: '/demo/linear-progress/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/linear-progress',
      ],
    },
    {
      name: 'Ripple',
      route: '/demo/ripple/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/ripple',
      ],
    },
    {
      name: 'Snackbar',
      route: '/demo/snackbar/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar',
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar/kitchen',
      ],
    },
    {
      name: 'Tabs',
      route: '/demo/tabs/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab',
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab-bar',
      ],
    },
    {
      name: 'Tooltip',
      route: '/demo/tooltip/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/tooltip',
      ],
    },
    {
      name: 'Touch Target',
      route: '/demo/touch-target/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/touch-target',
      ],
    },
    {
      name: 'Typography',
      route: '/demo/typography/',
      indent: 0,
    },
  ];

  $: activeSection = sections.find(
    (section) =>
      'route' in section &&
      routesEqual(section.route ?? '', $page.url.pathname),
  ) as DemoSection | undefined;
  let previousPagePath: string | undefined = undefined;
  $: if (mainContent && previousPagePath !== $page.url.pathname) {
    drawerOpen = false;
    const hashEl =
      window.location.hash &&
      document.querySelector<HTMLElement>(window.location.hash);
    const top = (hashEl && hashEl.offsetTop) || 0;
    mainContent.scrollTop = top;
    previousPagePath = $page.url.pathname;
  }

  onMount(() => setTimeout(setMiniWindow, 0));

  onMount(() => {
    if (mainContent) {
      mainContentGesture = new TinyGesture(mainContent, {
        mouseSupport: false,
      });
      let touchStartX: number = 0;
      mainContentGesture.on('panstart', () => {
        touchStartX = mainContentGesture.touchStartX;
      });
      mainContentGesture.on('swiperight', () => {
        if (touchStartX <= 40) {
          drawerOpen = true;
        }
      });
    }

    if (drawer) {
      drawerGesture = new TinyGesture(drawer.getElement(), {
        mouseSupport: false,
      });
      drawerGesture.on('swipeleft', () => {
        drawerOpen = false;
      });
    }
  });

  onDestroy(() => {
    if (mainContentGesture) {
      mainContentGesture.destroy();
    }
    if (drawerGesture) {
      drawerGesture.destroy();
    }
  });

  function routesEqual(a: string, b: string) {
    return (
      (a.endsWith('/') ? a.slice(0, -1) : a) ===
      (b.endsWith('/') ? b.slice(0, -1) : b)
    );
  }

  function setMiniWindow() {
    if (typeof window !== 'undefined') {
      miniWindow = window.innerWidth < 720;
    }
  }
</script>

<style>
  @media (max-width: 720px) {
    * > :global(.hide-initial-small) {
      display: none;
    }
  }
</style>
