<svelte:window on:resize={setMiniWindow} />
<TopAppBar variant="static">
  <Row>
    <Section>
      {#if miniWindow}
        <IconButton class="material-icons" on:click={() => drawerOpen = !drawerOpen}>menu</IconButton>
      {/if}
      <a use:link href="/" style="color: inherit;">
        <Title>Material Components</Title>
      </a>
    </Section>
    <Section align="end" toolbar>
      <Button href="https://github.com/hperrin/svelte-material-ui" style="color: white;">GitHub</Button>
    </Section>
  </Row>
</TopAppBar>
<div class="drawer-container">
  <Drawer variant={miniWindow ? 'modal' : null} bind:open={drawerOpen}>
    <Content>
      <List>
        {#each sections as section}
          <Item use={[link]} href={'key' in section ? '/'+section.key : ('shortcut' in section ? '/'+section.shortcut : undefined)} on:click={() => pickSection(section)} activated={'key' in section && $location === '/'+section.key} title={section.name} style="{section.indent ? 'margin-left: '+(section.indent * 25)+'px;' : ''}">
            <Text>{section.name}</Text>
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
  import TopAppBar, {Row, Section, Title} from 'svelte-material-ui/components/top-app-bar';
  import Drawer, {Content, Scrim, AppContent} from 'svelte-material-ui/components/drawer';
  import Button from 'svelte-material-ui/components/button';
  import IconButton from 'svelte-material-ui/components/icon-button';
  import List, {Item, Text} from 'svelte-material-ui/components/list';

  import Home from './Home.svelte';
  import DemoButton from './component-demos/Button.svelte';
  import DemoFab from './component-demos/Fab.svelte';
  import DemoIconButton from './component-demos/IconButton.svelte';
  import DemoCard from './component-demos/Card.svelte';
  import DemoChips from './component-demos/Chips.svelte';
  import DemoDialog from './component-demos/Dialog.svelte';
  import DemoDrawer from './component-demos/Drawer.svelte';
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
  import DemoRipple from './component-demos/Ripple.svelte';
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
      name: 'Ripples',
      key: 'ripple',
      component: DemoRipple,
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