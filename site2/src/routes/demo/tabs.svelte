<svelte:head>
  <title>Tabs - SMUI</title>
</svelte:head>

<section>
  <h2>Tabs</h2>

  <div>
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
      <!-- Notice that the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>

    <div style="margin-top: 15px;">
      Programmatically select:
      {#each ['Home', 'Merchandise', 'About Us'] as tab}
        <Button on:click={() => active = tab}><Label>{tab}</Label></Button>
      {/each}
    </div>

    <pre class="status">Selected: {active}</pre>
  </div>

  <div>
    Tabs with icons next to labels:
    <TabBar tabs={iconTabs} let:tab>
      <Tab {tab}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
  </div>

  <div>
    Keyed tabs with icons above labels, preselected tab, indicators restricted to content, and fade transition:
    <TabBar tabs={keyedTabs} let:tab key={tab => tab.k} bind:active={keyedTabsActive}>
      <Tab {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition="fade">
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>

    <pre class="status">Selected: {keyedTabsActive.k}</pre>
  </div>

  <div>
    Scrolling tabs:
    <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>
      <Tab {tab}>
        <Label>Tab {tab}</Label>
      </Tab>
    </TabBar>
  </div>

  <div>
    Min width tabs:
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>
      <Tab {tab} minWidth>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </div>

  <div class="icon-indicators">
    Icon indicators:
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>
      <Tab {tab} tabIndicator$type="icon" tabIndicator$content$class="material-icons">
        <Label>{tab}</Label>
        <span slot="tab-indicator">star</span>
      </Tab>
    </TabBar>
  </div>
</section>

<script>
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';

  let active = 'Home';
  let iconTabs = [
    {
      icon: 'access_time',
      label: 'Recents'
    },
    {
      icon: 'near_me',
      label: 'Nearby'
    },
    {
      icon: 'favorite',
      label: 'Favorites'
    }
  ];
  let keyedTabs = [
    {
      k: 1,
      icon: 'code',
      label: 'Code'
    },
    {
      k: 2,
      icon: 'code',
      label: 'Code'
    },
    {
      k: 3,
      icon: 'code',
      label: 'Code'
    },
    {
      k: 4,
      icon: 'code',
      label: 'Code'
    }
  ];
  let keyedTabsActive = keyedTabs[2];
</script>

<style>
  section > div {
    margin-bottom: 40px;
  }

  .icon-indicators :global(.mdc-tab-indicator--active .mdc-tab-indicator__content) {
    opacity: .2;
  }
</style>