<div>
  <TabBar {tabs} let:tab bind:active>
    <Tab {tab}>
      <Icon class="material-icons">{tab.icon}</Icon>
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>
</div>

<script lang="ts">
  import Tab, { Icon, Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let tabs = [
    {
      icon: 'access_time',
      label: 'Recents',
    },
    {
      icon: 'near_me',
      label: 'Nearby',
    },
    {
      icon: 'favorite',
      label: 'Favorites',
    },
  ];
  let active = tabs[0];
</script>
