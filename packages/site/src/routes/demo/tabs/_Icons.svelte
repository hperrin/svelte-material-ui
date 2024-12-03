<div>
  <TabBar {tabs} key={(tab) => tab.label} bind:active>
    {#snippet tab(tab)}
      <Tab {tab}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    {/snippet}
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
  let active = $state(tabs[0]);
</script>
