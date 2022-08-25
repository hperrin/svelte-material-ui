<div>
  <TabBar {tabs} let:tab {key} bind:active>
    <Tab
      {tab}
      stacked={true}
      indicatorSpanOnlyContent={true}
      tabIndicator$transition="fade"
    >
      <Icon class="material-icons">{tab.icon}</Icon>
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>

  <pre class="status">Selected: {active.k}</pre>
</div>

<script lang="ts">
  import Tab, { Icon, Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  type TabEntry = {
    k: number;
    icon: string;
    label: string;
  };
  const key = (tab: TabEntry) => tab.k;

  let tabs: TabEntry[] = [
    {
      k: 1,
      icon: 'code',
      label: 'Code',
    },
    {
      k: 2,
      icon: 'code',
      label: 'Code',
    },
    {
      k: 3,
      icon: 'code',
      label: 'Code',
    },
    {
      k: 4,
      icon: 'code',
      label: 'Code',
    },
  ];
  let active = tabs[2];
</script>
