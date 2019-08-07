<svelte:window on:resize={setMiniWindow} />
<Drawer variant={miniWindow ? 'modal' : null} bind:open={drawerOpen}>
  <div use:Header>
    <h1 use:Title>Material Components</h1>
  </div>
  <div use:Content>
    <List>
      {#each sections as section}
        <Item href={'key' in section ? '#' : undefined} on:click={() => pickSection(section)} activated={'key' in section && key === section.key} title={section.name} style="{section.indent ? 'margin-left: '+(section.indent * 25)+'px;' : ''}">
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
    <svelte:component this={component} />
  </main>
</div>

<script>
  import {onMount} from 'svelte';
  import Drawer, {Header, Title, Content, Scrim, AppContent} from '../components/drawer';
  import IconButton from '../components/icon-button';
  import List, {Item, Text} from '../components/list';

  import DemoButton from './DemoButton';
  import DemoFab from './DemoFab';
  import DemoIconButton from './DemoIconButton';
  import DemoCard from './DemoCard';
  import DemoChips from './DemoChips';
  import DemoDialog from './DemoDialog';
  import DemoDrawer from './DemoDrawer';
  import DemoCheckbox from './DemoCheckbox';
  import DemoRadio from './DemoRadio';
  import DemoSelect from './DemoSelect';
  import DemoSlider from './DemoSlider';
  import DemoSwitch from './DemoSwitch';
  import DemoTextfield from './DemoTextfield';
  import DemoLinearProgress from './DemoLinearProgress';
  import DemoList from './DemoList';
  import DemoMenuSurface from './DemoMenuSurface';
  import DemoMenu from './DemoMenu';
  import DemoTypography from './DemoTypography';

  let key = 'button';
  let component = DemoButton;
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
      component: DemoTextfield,
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
      component: DemoTextfield,
      indent: 1
    },
    {
      name: 'Form Fields',
      shortcut: 'radio',
      component: DemoRadio,
      indent: 1
    },
    {
      name: 'Line Ripple',
      shortcut: 'textfield',
      component: DemoTextfield,
      indent: 1
    },
    {
      name: 'Notched Outline',
      shortcut: 'textfield',
      component: DemoTextfield,
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
      component: DemoSelect,
      indent: 2
    },
    {
      name: 'Select Icon',
      shortcut: 'select',
      component: DemoSelect,
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
      component: DemoTextfield,
      indent: 2
    },
    {
      name: 'Text Field Helper Text',
      shortcut: 'textfield',
      component: DemoTextfield,
      indent: 2
    },
    {
      name: 'Text Field Icon',
      shortcut: 'textfield',
      component: DemoTextfield,
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
      name: 'Typography',
      key: 'typography',
      component: DemoTypography,
      indent: 0
    }
  ];

  onMount(setMiniWindow);

  function pickSection(section) {
    if ('key' in section) {
      key = section.key;
    } else {
      key = section.shortcut;
    }
    component = section.component;
    drawerOpen = false;
    mainContent.scrollTop = 0;
  }

  function setMiniWindow() {
    miniWindow = window.innerWidth < 720;
  }
</script>

<style lang="scss">
  @import "../components/typography";

  :global(body), :global(app) {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .app-content {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
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