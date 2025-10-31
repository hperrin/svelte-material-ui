<div>
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} bind:active>
    {#snippet tab(tab)}
      <Tab {tab} minWidth>
        <Label>{tab}</Label>
      </Tab>
    {/snippet}
  </TabBar>
</div>

<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let active = $state('Home');
</script>
