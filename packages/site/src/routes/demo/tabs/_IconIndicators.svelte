<div class="icon-indicators">
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
    <Tab
      {tab}
      tabIndicator$type="icon"
      tabIndicator$content$class="material-icons"
    >
      <Label>{tab}</Label>
      <svelte:fragment slot="tab-indicator">star</svelte:fragment>
    </Tab>
  </TabBar>
</div>

<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let active = 'Home';
</script>

<style>
  .icon-indicators
    :global(.mdc-tab-indicator--active .mdc-tab-indicator__content) {
    opacity: 0.2;
  }
</style>
