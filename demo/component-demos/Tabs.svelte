<section>
  <h2>Tabs</h2>

  <div>
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>
      <!-- Notice that the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </div>

  <div>
    Tabs with icons next to labels:
    <TabBar tabs={iconTabs} let:tab bind:active={iconTabsActive}>
      <Tab {tab}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
  </div>

  <div>
    Programmatically select:
    {#each iconTabs as tab}
      <Button on:click={() => iconTabsActive = tab}><Label>{tab.label}</Label></Button>
    {/each}
  </div>

  <div class="status">Selected: {iconTabsActive.label}</div>

  <div>
    Keyed tabs with icons above labels, preselected tab, indicators restricted to content, and fade transition:
    <TabBar tabs={keyedTabs} let:tab key={tab => tab.k} bind:active={keyedTabsActive}>
      <Tab {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition="fade">
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
  </div>

  <div class="status">Selected: {keyedTabsActive.k}</div>

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
      <Tab {tab} tabIndicator$type="icon" tabIndicator$content$class="material-icons" tabIndicatorText="star">
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </div>
</section>

<script>
  import Tab, {Icon, Label} from 'svelte-material-ui/components/tab';
  import TabBar from 'svelte-material-ui/components/tab-bar';
  import Button from 'svelte-material-ui/components/button';

  let tab = 'Home';
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
  let iconTabsActive = iconTabs[0];
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
  .icon-indicators :global(.mdc-tab-indicator--active .mdc-tab-indicator__content) {
    opacity: .2;
  }
</style>