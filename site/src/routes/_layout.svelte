<svelte:window on:resize={setMiniWindow} />
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
          component={A}
          href="/"
          on:click={() => (activeSection = null)}
          class="mdc-theme--primary"
          style={miniWindow ? 'padding-left: 0;' : ''}
        >
          {miniWindow ? 'SMUI' : 'Svelte Material UI'}
        </Title>
      </Section>
      <Section align="end" toolbar style="color: var(--mdc-on-surface, #000);">
        {#if activeSection}
          {#each activeSection.repos || [] as repo}
            <Wrapper>
              <IconButton href={repo} target="_blank">
                <Icon component={Svg} viewBox="0 0 24 24">
                  <path fill="currentColor" d={mdiFileDocument} />
                </Icon>
              </IconButton>
              <Tooltip>View Docs: {repo.split('/').slice(-1)[0]}</Tooltip>
            </Wrapper>
          {/each}
          {#if !activeSection.nosource}
            <Wrapper>
              <IconButton
                href={`https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes${activeSection.route}`}
                target="_blank"
              >
                <Icon component={Svg} viewBox="0 0 24 24">
                  <path fill="currentColor" d={mdiCodeTags} />
                </Icon>
              </IconButton>
              <Tooltip>View Source Directory</Tooltip>
            </Wrapper>
          {/if}
        {/if}
        <Wrapper>
          <IconButton href="https://discord.gg/aFzmkrmg9P">
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiDiscord} />
            </Icon>
          </IconButton>
          <Tooltip>Join the Discord Server</Tooltip>
        </Wrapper>
        <Wrapper>
          <IconButton href="https://twitter.com/SciActive">
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiTwitter} />
            </Icon>
          </IconButton>
          <Tooltip>Hunter Perrin (SMUI Author) on Twitter</Tooltip>
        </Wrapper>
        <Wrapper>
          <IconButton href="https://github.com/hperrin/svelte-material-ui">
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiGithub} />
            </Icon>
          </IconButton>
          <Tooltip>SMUI on GitHub</Tooltip>
        </Wrapper>
        <Wrapper>
          <IconButton
            toggle
            pressed={lightTheme}
            on:MDCIconButtonToggle:change={switchTheme}
          >
            <Icon component={Svg} viewBox="0 0 24 24" on>
              <path fill="currentColor" d={mdiWeatherNight} />
            </Icon>
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiWeatherSunny} />
            </Icon>
          </IconButton>
          <Tooltip>{lightTheme ? 'Lights off' : 'Lights on'}</Tooltip>
        </Wrapper>
      </Section>
    </Row>
  </TopAppBar>
  <div class="drawer-container">
    <Drawer
      variant={miniWindow ? 'modal' : undefined}
      bind:open={drawerOpen}
      class="demo-drawer mdc-theme--secondary-bg {miniWindow
        ? 'demo-drawer-adjust'
        : 'hide-initial-small'}"
    >
      <Content>
        <List>
          {#each sections as section (section.name)}
            {#if section.separator}
              <Separator />
            {:else}
              <Item
                bind:this={section.component}
                nonInteractive={!('route' in section || 'shortcut' in section)}
                href={'route' in section
                  ? section.route
                  : 'shortcut' in section
                  ? section.shortcut
                  : null}
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

<script>
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  import {
    mdiFileDocument,
    mdiCodeTags,
    mdiDiscord,
    mdiTwitter,
    mdiGithub,
    mdiWeatherSunny,
    mdiWeatherNight,
  } from '@mdi/js';

  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Drawer, { Content, Scrim, AppContent } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import List, { Item, Text, Separator } from '@smui/list';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import { Icon } from '@smui/common';
  import A from '@smui/common/A.svelte';
  import Svg from '@smui/common/Svg.svelte';

  const { page } = stores();
  const iframe = $page.path.includes('/iframe');

  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;

  let lightTheme =
    typeof window === 'undefined' ||
    window.matchMedia('(prefers-color-scheme: light)').matches;
  function switchTheme() {
    lightTheme = !lightTheme;

    let themeLink = document.head.querySelector('#theme');
    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      themeLink.id = 'theme';
    }
    themeLink.href = `smui${lightTheme ? '' : '-dark'}.css`;
    document.head
      .querySelector('link[href="smui-dark.css"]')
      .insertAdjacentElement('afterend', themeLink);

    let siteLink = document.head.querySelector('#site');
    if (!siteLink) {
      siteLink = document.createElement('link');
      siteLink.rel = 'stylesheet';
      siteLink.id = 'site';
    }
    siteLink.href = `site${lightTheme ? '' : '-dark'}.css`;
    document.head
      .querySelector('link[href="site-dark.css"]')
      .insertAdjacentElement('afterend', siteLink);
  }

  const sections = [
    {
      name: 'Installation',
      route: '/INSTALL.md/',
      indent: 0,
      nosource: true,
    },
    {
      name: 'Theming',
      route: '/THEMING.md/',
      indent: 0,
      nosource: true,
    },
    {
      name: 'Migrating',
      route: '/MIGRATING.md/',
      indent: 0,
      nosource: true,
    },
    {
      separator: true,
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
      name: 'Button',
      route: '/demo/button/',
      indent: 0,
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
      name: 'Top App Bar',
      route: '/demo/top-app-bar/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/top-app-bar',
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
    (section) => 'route' in section && routesEqual(section.route, $page.path)
  );
  let previousPagePath = null;
  $: if (mainContent && previousPagePath !== $page.path) {
    drawerOpen = false;
    const top = window.location.hash
      ? document.querySelector(window.location.hash)?.offsetTop || 0
      : 0;
    mainContent.scrollTop = top;
    previousPagePath = $page.path;
  }

  onMount(setMiniWindow);

  function routesEqual(a, b) {
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
    :global(* > .hide-initial-small) {
      display: none;
    }
  }
</style>
