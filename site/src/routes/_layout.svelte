<svelte:window on:resize={setMiniWindow} />
{#if $page.path.startsWith('/demo/top-app-bar-iframe')}
  <slot></slot>
{:else}
  <TopAppBar variant="static" class="demo-top-app-bar">
    <Row>
      <Section>
        {#if miniWindow}
          <IconButton class="material-icons" on:click={() => drawerOpen = !drawerOpen}>menu</IconButton>
        {/if}
        <Title component={A} href="/" class="mdc-theme--primary" style="{miniWindow ? 'padding-left: 0;' : ''}">
          Svelte Material UI
        </Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton href="https://twitter.com/SciActive">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#000000" d="{mdiTwitter}" />
            </svg>
          </Icon>
        </IconButton>
        <IconButton href="https://github.com/hperrin/svelte-material-ui">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#000000" d="{mdiGithubCircle}" />
            </svg>
          </Icon>
        </IconButton>
      </Section>
    </Row>
  </TopAppBar>
  <div class="drawer-container">
    <Drawer variant={miniWindow ? 'modal' : null} bind:open={drawerOpen} class="demo-drawer mdc-theme--secondary-bg {miniWindow ? 'demo-drawer-adjust' : ''}">
      <Content>
        <List>
          {#each sections as section (section.name)}
            <Item
              bind:this={section.component}
              href={'route' in section ? section.route : section.shortcut}
              on:click={() => pickSection(section)}
              activated={'route' in section && section.route === $page.path}
              title={section.name}
              style="{section.indent ? 'margin-left: '+(section.indent * 25)+'px;' : ''}"
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
      <main class="demo-main-content" bind:this={mainContent}>
        <slot></slot>
      </main>
    </AppContent>
  </div>
{/if}

<script>
  import {onMount} from 'svelte';
  import {stores} from '@sapper/app';
  import {mdiTwitter, mdiGithubCircle} from '@mdi/js';

  import './_app.scss';

  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import Drawer, {Content, Scrim, AppContent} from '@smui/drawer';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';
  import List, {Item, Text} from '@smui/list';
  import {Label, Icon} from '@smui/common';
  import A from '@smui/common/A.svelte';

  const {page} = stores();

  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;

  const sections = [
    {
      name: 'Buttons',
      route: '/demo/button',
      indent: 0
    },
    {
      name: 'Floating Action Button',
      route: '/demo/fab',
      indent: 1
    },
    {
      name: 'Icon Buttons',
      route: '/demo/icon-button',
      indent: 1
    },
    {
      name: 'Cards',
      route: '/demo/card',
      indent: 0
    },
    {
      name: 'Chips',
      route: '/demo/chips',
      indent: 0
    },
    {
      name: 'Data Tables',
      route: '/demo/data-table',
      indent: 0
    },
    {
      name: 'Dialogs',
      route: '/demo/dialog',
      indent: 0
    },
    {
      name: 'Drawers',
      route: '/demo/drawer',
      indent: 0
    },
    {
      name: 'Elevation',
      route: '/demo/elevation',
      indent: 0
    },
    {
      name: 'Image List',
      route: '/demo/image-list',
      indent: 0
    },
    {
      name: 'Inputs and Controls',
      shortcut: '/demo/textfield',
      indent: 0
    },
    {
      name: 'Checkboxes',
      route: '/demo/checkbox',
      indent: 1
    },
    {
      name: 'Floating Label',
      shortcut: '/demo/textfield',
      indent: 1
    },
    {
      name: 'Form Fields',
      shortcut: '/demo/radio',
      indent: 1
    },
    {
      name: 'Line Ripple',
      shortcut: '/demo/textfield',
      indent: 1
    },
    {
      name: 'Notched Outline',
      shortcut: '/demo/textfield',
      indent: 1
    },
    {
      name: 'Radio Buttons',
      route: '/demo/radio',
      indent: 1
    },
    {
      name: 'Select Menus',
      route: '/demo/select',
      indent: 1
    },
    {
      name: 'Select Helper Text',
      shortcut: '/demo/select',
      indent: 2
    },
    {
      name: 'Select Icon',
      shortcut: '/demo/select',
      indent: 2
    },
    {
      name: 'Sliders',
      route: '/demo/slider',
      indent: 1
    },
    {
      name: 'Switches',
      route: '/demo/switch',
      indent: 1
    },
    {
      name: 'Text Field',
      route: '/demo/textfield',
      indent: 1
    },
    {
      name: 'Text Field Character Count',
      shortcut: '/demo/textfield',
      indent: 2
    },
    {
      name: 'Text Field Helper Text',
      shortcut: '/demo/textfield',
      indent: 2
    },
    {
      name: 'Text Field Icon',
      shortcut: '/demo/textfield',
      indent: 2
    },
    {
      name: 'Linear Progress',
      route: '/demo/linear-progress',
      indent: 0
    },
    {
      name: 'Lists',
      route: '/demo/list',
      indent: 0
    },
    {
      name: 'Menu Surface',
      route: '/demo/menu-surface',
      indent: 0
    },
    {
      name: 'Menus',
      route: '/demo/menu',
      indent: 0
    },
    {
      name: 'Paper',
      route: '/demo/paper',
      indent: 0
    },
    {
      name: 'Ripples',
      route: '/demo/ripple',
      indent: 0
    },
    {
      name: 'Snackbars',
      route: '/demo/snackbars',
      indent: 0
    },
    {
      name: 'Tabs',
      route: '/demo/tabs',
      indent: 0
    },
    {
      name: 'Tab',
      shortcut: '/demo/tabs',
      indent: 1
    },
    {
      name: 'Tab Bar',
      shortcut: '/demo/tabs',
      indent: 1
    },
    {
      name: 'Tab Indicator',
      shortcut: '/demo/tabs',
      indent: 1
    },
    {
      name: 'Tab Scroller',
      shortcut: '/demo/tabs',
      indent: 1
    },
    {
      name: 'Theme',
      route: '/demo/theme',
      indent: 0
    },
    {
      name: 'Top App Bar',
      route: '/demo/top-app-bar',
      indent: 0
    },
    {
      name: 'Typography',
      route: '/demo/typography',
      indent: 0
    }
  ];

  onMount(setMiniWindow);

  function pickSection(section) {
    drawerOpen = false;
    mainContent.scrollTop = 0;

    // Svelte/Sapper is not updated the components correctly, so I need this.
    sections.forEach(section => section.component.$set({activated: false}));
    section.component.$set({activated: true});
  }

  function setMiniWindow() {
    miniWindow = window.innerWidth < 720;
  }
</script>