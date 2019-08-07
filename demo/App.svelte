<svelte:window on:resize={setMiniWindow} />
<Drawer variant={miniWindow ? 'modal' : null} bind:open={drawerOpen}>
  <div use:Header>
    <a use:link href="/">
      <h1 use:Title>Material Components</h1>
    </a>
  </div>
  <div use:Content>
    <List>
      {#each sections as section}
        <Item use={[link]} href={'key' in section ? '/'+section.key : ('shortcut' in section ? '/'+section.shortcut : undefined)} on:click={() => pickSection(section)} activated={'key' in section && $location === '/'+section.key} title={section.name} style="{section.indent ? 'margin-left: '+(section.indent * 25)+'px;' : ''}">
          <span use:Text>{section.name}</span>
        </Item>
      {/each}
    </List>
  </div>
</Drawer>

{#if miniWindow}
  <div use:Scrim />
{/if}
<div use:AppContent class="app-content">
  <main class="main-content" bind:this={mainContent}>
    {#if miniWindow}
      <div>
        <IconButton on:click={() => drawerOpen = !drawerOpen}>menu</IconButton>
      </div>
    {/if}
    <Router {routes} />
  </main>
</div>

<script>
  import {onMount} from 'svelte';
  import Router, {link, location} from 'svelte-spa-router';
  import Drawer, {Header, Title, Content, Scrim, AppContent} from 'svelte-material-ui/components/drawer';
  import IconButton from 'svelte-material-ui/components/icon-button';
  import List, {Item, Text} from 'svelte-material-ui/components/list';

  import Home from './Home';
  import DemoButton from './component-demos/Button';
  import DemoFab from './component-demos/Fab';
  import DemoIconButton from './component-demos/IconButton';
  import DemoCard from './component-demos/Card';
  import DemoChips from './component-demos/Chips';
  import DemoDialog from './component-demos/Dialog';
  import DemoDrawer from './component-demos/Drawer';
  import DemoCheckbox from './component-demos/Checkbox';
  import DemoRadio from './component-demos/Radio';
  import DemoSelect from './component-demos/Select';
  import DemoSlider from './component-demos/Slider';
  import DemoSwitch from './component-demos/Switch';
  import DemoTextfield from './component-demos/Textfield';
  import DemoLinearProgress from './component-demos/LinearProgress';
  import DemoList from './component-demos/List';
  import DemoMenuSurface from './component-demos/MenuSurface';
  import DemoMenu from './component-demos/Menu';
  import DemoRipple from './component-demos/Ripple';
  import DemoTheme from './component-demos/Theme';
  import DemoTypography from './component-demos/Typography';

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
      name: 'Theme',
      key: 'theme',
      component: DemoTheme,
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

<style lang="scss">
  @import "svelte-material-ui/components/typography";

  :global(body), :global(app) {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .app-content {
    flex: auto;
    overflow: auto;
    position: relative;
  }

  .main-content {
    overflow: auto;
    height: 100%;
    display: flex;
  }

  .main-content :global(section) {
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  * :global(section > div) {
    margin: 1em 0 .6em;
  }

  * :global(.status) {
    font-family: monospace;
    font-size: .9em;
  }

  :global(h1) {
    @include mdc-typography('headline1');
  }

  :global(h2) {
    @include mdc-typography('headline2');
  }

  :global(h3) {
    @include mdc-typography('headline3');
  }

  :global(h4) {
    @include mdc-typography('headline4');
  }

  :global(h5) {
    @include mdc-typography('headline5');
  }

  :global(h6) {
    @include mdc-typography('headline6');
  }

  :global(*) {
    @include mdc-typography('body1');
  }

  :global(code, pre) {
    font-family: 'Courier New', Courier, monospace;
  }

  :global(small) {
    font-size: .9em;
  }

  :global(big) {
    font-size: 1.1em;
  }

  :global(b, strong) {
    font-weight: bold;
  }

  :global(caption) {
    @include mdc-typography('caption');
  }
</style>