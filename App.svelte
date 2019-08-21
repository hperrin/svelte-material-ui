<svelte:window on:resize={setMiniWindow} />
<TopAppBar variant="static" class="demo-top-app-bar mdc-elevation--z4">
  <Row>
    <Section>
      {#if miniWindow}
        <IconButton class="material-icons" on:click={() => drawerOpen = !drawerOpen}>menu</IconButton>
      {/if}
      <Title component={A} use={[link]} href="/" class="mdc-theme--primary" style="{miniWindow ? 'padding-left: 0;' : ''}">
        Svelte Material UI
      </Title>
    </Section>
    <Section align="end" toolbar>
      {#each [{name: 'SMUI', url: 'https://github.com/hperrin/svelte-material-ui'}, {name: 'Demo', url: 'https://github.com/hperrin/svelte-material-ui-demo'}] as repo}
        <Button href={repo.url}>
          <Label>{repo.name}</Label>
          <Icon>
            <svg style="width: 18px; height: 18px" viewBox="0 0 24 24">
              <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </Icon>
        </Button>
      {/each}
    </Section>
  </Row>
</TopAppBar>
<div class="drawer-container">
  <Drawer variant={miniWindow ? 'modal' : null} bind:open={drawerOpen} class="demo-drawer mdc-theme--secondary-bg">
    <Content>
      <List>
        {#each sections as section}
          <Item use={[link]} href={'key' in section ? '/'+section.key : ('shortcut' in section ? '/'+section.shortcut : undefined)} on:click={() => pickSection(section)} activated={'key' in section && $location === '/'+section.key} title={section.name} style="{section.indent ? 'margin-left: '+(section.indent * 25)+'px;' : ''}">
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
      <Router {routes} />
    </main>
  </AppContent>
</div>

<script>
  import {onMount} from 'svelte';
  import Router, {link, location} from 'svelte-spa-router';
  import './App.scss';
  import TopAppBar, {Row, Section, Title} from 'svelte-material-ui/top-app-bar';
  import Drawer, {Content, Scrim, AppContent} from 'svelte-material-ui/drawer';
  import Button, {Label, Icon} from 'svelte-material-ui/button';
  import IconButton from 'svelte-material-ui/icon-button';
  import List, {Item, Text} from 'svelte-material-ui/list';
  import A from 'svelte-material-ui/common/A.svelte';

  import Home from './Home.svelte';
  import DemoButton from './component-demos/Button.svelte';
  import DemoFab from './component-demos/Fab.svelte';
  import DemoIconButton from './component-demos/IconButton.svelte';
  import DemoCard from './component-demos/Card.svelte';
  import DemoChips from './component-demos/Chips.svelte';
  import DemoDataTable from './component-demos/DataTable.svelte';
  import DemoDialog from './component-demos/Dialog.svelte';
  import DemoDrawer from './component-demos/Drawer.svelte';
  import DemoElevation from './component-demos/Elevation.svelte';
  import DemoImageList from './component-demos/ImageList.svelte';
  import DemoCheckbox from './component-demos/Checkbox.svelte';
  import DemoRadio from './component-demos/Radio.svelte';
  import DemoSelect from './component-demos/Select.svelte';
  import DemoSlider from './component-demos/Slider.svelte';
  import DemoSwitch from './component-demos/Switch.svelte';
  import DemoTextfield from './component-demos/Textfield.svelte';
  import DemoLinearProgress from './component-demos/LinearProgress.svelte';
  import DemoList from './component-demos/List.svelte';
  import DemoMenuSurface from './component-demos/MenuSurface.svelte';
  import DemoMenu from './component-demos/Menu.svelte';
  import DemoPaper from './component-demos/Paper.svelte';
  import DemoRipple from './component-demos/Ripple.svelte';
  import DemoSnackbar from './component-demos/Snackbar.svelte';
  import DemoTabs from './component-demos/Tabs.svelte';
  import DemoTheme from './component-demos/Theme.svelte';
  import DemoTopAppBar from './component-demos/TopAppBar.svelte';
  import DemoTypography from './component-demos/Typography.svelte';

  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;

  const sections = [
    {
      name: 'Buttons',
      key: 'button',
      component: DemoButton,
      indent: 0
    },
    {
      name: 'Floating Action Button',
      key: 'fab',
      component: DemoFab,
      indent: 1
    },
    {
      name: 'Icon Buttons',
      key: 'icon-button',
      component: DemoIconButton,
      indent: 1
    },
    {
      name: 'Cards',
      key: 'card',
      component: DemoCard,
      indent: 0
    },
    {
      name: 'Chips',
      key: 'chips',
      component: DemoChips,
      indent: 0
    },
    {
      name: 'Data Tables',
      key: 'data-table',
      component: DemoDataTable,
      indent: 0
    },
    {
      name: 'Dialogs',
      key: 'dialog',
      component: DemoDialog,
      indent: 0
    },
    {
      name: 'Drawers',
      key: 'drawer',
      component: DemoDrawer,
      indent: 0
    },
    {
      name: 'Elevation',
      key: 'elevation',
      component: DemoElevation,
      indent: 0
    },
    {
      name: 'Image List',
      key: 'image-list',
      component: DemoImageList,
      indent: 0
    },
    {
      name: 'Inputs and Controls',
      shortcut: 'textfield',
      indent: 0
    },
    {
      name: 'Checkboxes',
      key: 'checkbox',
      component: DemoCheckbox,
      indent: 1
    },
    {
      name: 'Floating Label',
      shortcut: 'textfield',
      indent: 1
    },
    {
      name: 'Form Fields',
      shortcut: 'radio',
      indent: 1
    },
    {
      name: 'Line Ripple',
      shortcut: 'textfield',
      indent: 1
    },
    {
      name: 'Notched Outline',
      shortcut: 'textfield',
      indent: 1
    },
    {
      name: 'Radio Buttons',
      key: 'radio',
      component: DemoRadio,
      indent: 1
    },
    {
      name: 'Select Menus',
      key: 'select',
      component: DemoSelect,
      indent: 1
    },
    {
      name: 'Select Helper Text',
      shortcut: 'select',
      indent: 2
    },
    {
      name: 'Select Icon',
      shortcut: 'select',
      indent: 2
    },
    {
      name: 'Sliders',
      key: 'slider',
      component: DemoSlider,
      indent: 1
    },
    {
      name: 'Switches',
      key: 'switch',
      component: DemoSwitch,
      indent: 1
    },
    {
      name: 'Text Field',
      key: 'textfield',
      component: DemoTextfield,
      indent: 1
    },
    {
      name: 'Text Field Character Count',
      shortcut: 'textfield',
      indent: 2
    },
    {
      name: 'Text Field Helper Text',
      shortcut: 'textfield',
      indent: 2
    },
    {
      name: 'Text Field Icon',
      shortcut: 'textfield',
      indent: 2
    },
    {
      name: 'Linear Progress',
      key: 'linear-progress',
      component: DemoLinearProgress,
      indent: 0
    },
    {
      name: 'Lists',
      key: 'list',
      component: DemoList,
      indent: 0
    },
    {
      name: 'Menu Surface',
      key: 'menu-surface',
      component: DemoMenuSurface,
      indent: 0
    },
    {
      name: 'Menus',
      key: 'menu',
      component: DemoMenu,
      indent: 0
    },
    {
      name: 'Paper',
      key: 'paper',
      component: DemoPaper,
      indent: 0
    },
    {
      name: 'Ripples',
      key: 'ripple',
      component: DemoRipple,
      indent: 0
    },
    {
      name: 'Snackbars',
      key: 'snackbars',
      component: DemoSnackbar,
      indent: 0
    },
    {
      name: 'Tabs',
      key: 'tabs',
      component: DemoTabs,
      indent: 0
    },
    {
      name: 'Tab',
      shortcut: 'tabs',
      indent: 1
    },
    {
      name: 'Tab Bar',
      shortcut: 'tabs',
      indent: 1
    },
    {
      name: 'Tab Indicator',
      shortcut: 'tabs',
      indent: 1
    },
    {
      name: 'Tab Scroller',
      shortcut: 'tabs',
      indent: 1
    },
    {
      name: 'Theme',
      key: 'theme',
      component: DemoTheme,
      indent: 0
    },
    {
      name: 'Top App Bar',
      key: 'top-app-bar',
      component: DemoTopAppBar,
      indent: 0
    },
    {
      name: 'Typography',
      key: 'typography',
      component: DemoTypography,
      indent: 0
    }
  ];

  const routes = {
    '/': Home
  };

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if ('key' in section) {
      routes['/'+section.key] = section.component;
    }
  }

  onMount(setMiniWindow);

  function pickSection(section) {
    drawerOpen = false;
    mainContent.scrollTop = 0;
  }

  function setMiniWindow() {
    miniWindow = window.innerWidth < 720;
  }
</script>