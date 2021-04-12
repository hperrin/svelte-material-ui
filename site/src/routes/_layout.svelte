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
          Svelte Material UI
        </Title>
      </Section>
      <Section align="end" toolbar>
        {#each repos as repo}
          <IconButton
            href={repo}
            target="_blank"
            title={`View Docs: ${repo.split('/').slice(-1)[0]}`}
          >
            <Icon
              component={Svg}
              style="width:24px;height:24px"
              viewBox="0 0 24 24"
            >
              <path fill="#000000" d={mdiFileDocument} />
            </Icon>
          </IconButton>
        {/each}
        {#if activeSection}
          <IconButton
            href={`https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes${activeSection.route}`}
            on:click={(event) => event.preventDefault()}
            on:MDCIconButtonToggle:change={() => {
              if (sourceFile == null) {
                sourceFile = `https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes${activeSection.route}index.svelte`;
              } else {
                sourceFile = null;
                sourceHTML = null;
              }
            }}
            toggle
            pressed={sourceFile != null}
            title="Toggle Source Code"
          >
            <Icon
              component={Svg}
              style="width:24px;height:24px"
              viewBox="0 0 24 24"
              on><path fill="#000000" d={mdiCodeTagsCheck} /></Icon
            >
            <Icon
              component={Svg}
              style="width:24px;height:24px"
              viewBox="0 0 24 24"><path fill="#000000" d={mdiCodeTags} /></Icon
            >
          </IconButton>
        {/if}
        <IconButton href="https://twitter.com/SciActive">
          <Icon
            component={Svg}
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path fill="#000000" d={mdiTwitter} />
          </Icon>
        </IconButton>
        <IconButton href="https://github.com/hperrin/svelte-material-ui">
          <Icon
            component={Svg}
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path fill="#000000" d={mdiGithub} />
          </Icon>
        </IconButton>
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
            <Item
              bind:this={section.component}
              nonInteractive={!('route' in section || 'shortcut' in section)}
              href={'route' in section
                ? section.route
                : 'shortcut' in section
                ? section.shortcut
                : null}
              on:click={() => pickSection(section)}
              activated={'route' in section && section.route === $page.path}
              title={section.name}
              style={section.indent
                ? 'margin-left: ' + section.indent * 25 + 'px;'
                : ''}
            >
              <Text class="mdc-theme--on-secondary">{section.name}</Text>
            </Item>
          {/each}
        </List>
      </Content>
    </Drawer>

    {#if miniWindow}
      <Scrim />
    {/if}
    <AppContent class="demo-app-content">
      {#if sourceHTML}
        <div id="demo-source-file">
          {@html sourceHTML}
        </div>
      {:else if sourceFile}
        <script
          src="https://emgithub.com/embed.js?target={encodeURIComponent(
            sourceFile
          )}&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on"></script>
      {/if}
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
    mdiCodeTagsCheck,
    mdiTwitter,
    mdiGithub,
  } from '@mdi/js';

  import './_app.scss';

  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Drawer, { Content, Scrim, AppContent } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import List, { Item, Text } from '@smui/list';
  import { Icon } from '@smui/common';
  import A from '@smui/common/A.svelte';
  import Svg from '@smui/common/Svg.svelte';

  const { page } = stores();
  const iframe = $page.path.startsWith('/demo/top-app-bar/iframe');

  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;
  let sourceFile = null;
  let sourceHTML = null;

  if (typeof document !== 'undefined') {
    document.write = (value) => {
      sourceHTML = value;
    };
  }

  $: if (!activeSection) {
    sourceFile = null;
    sourceHTML = null;
  }

  const sections = [
    {
      name: 'Banner',
      route: '/demo/banner/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/banner',
      ],
    },
    {
      name: 'Buttons',
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
      name: 'Icon Buttons',
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
      name: 'Chips',
      route: '/demo/chips/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/chips',
      ],
    },
    {
      name: 'Data Tables',
      route: '/demo/data-table/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/data-table',
      ],
    },
    {
      name: 'Dialogs',
      route: '/demo/dialog/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/dialog',
      ],
    },
    {
      name: 'Drawers',
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
      name: 'Checkboxes',
      route: '/demo/checkbox/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/checkbox',
      ],
    },
    {
      name: 'Form Fields',
      route: '/demo/form-field/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/form-field',
      ],
    },
    {
      name: 'Radio Buttons',
      route: '/demo/radio/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/radio',
      ],
    },
    {
      name: 'Select Menus',
      route: '/demo/select/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/select',
      ],
    },
    {
      name: 'Sliders',
      route: '/demo/slider/',
      indent: 1,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/slider',
      ],
    },
    {
      name: 'Switches',
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
      name: 'Linear Progress',
      route: '/demo/linear-progress/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/linear-progress',
      ],
    },
    {
      name: 'Lists',
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
      name: 'Menus',
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
      name: 'Ripples',
      route: '/demo/ripple/',
      indent: 0,
      repos: [
        'https://github.com/hperrin/svelte-material-ui/tree/master/packages/ripple',
      ],
    },
    {
      name: 'Snackbars',
      route: '/demo/snackbars/',
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
      name: 'Theme',
      route: '/demo/theme/',
      indent: 0,
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
      name: 'Typography',
      route: '/demo/typography/',
      indent: 0,
    },
  ];

  let activeSection = sections.find(
    (section) => 'route' in section && section.route === $page.path
  );
  $: repos =
    activeSection && 'repos' in activeSection ? activeSection.repos : [];

  onMount(setMiniWindow);

  function pickSection(section) {
    if (!('shortcut' in section) && !('route' in section)) {
      return;
    }

    drawerOpen = false;
    mainContent.scrollTop = 0;

    // Svelte/Sapper is not updated the components correctly, so I need this.
    sections.forEach((section) => section.component.$set({ activated: false }));
    section.component.$set({ activated: true });

    sourceFile = null;
    sourceHTML = null;

    activeSection =
      'shortcut' in section
        ? sections.find((sec) => sec.route === section.shortcut)
        : section;
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
