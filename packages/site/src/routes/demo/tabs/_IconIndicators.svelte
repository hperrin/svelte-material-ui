<div class="icon-indicators">
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} bind:active>
    {#snippet tab(tab)}
      <Tab
        {tab}
        tabIndicator$type="icon"
        tabIndicator$content$class="material-icons"
      >
        <Label>{tab}</Label>
        {#snippet tabIndicator()}star{/snippet}
      </Tab>
    {/snippet}
  </TabBar>
</div>

<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let active = $state('Home');
</script>

<style>
  .icon-indicators
    :global(.mdc-tab-indicator--active .mdc-tab-indicator__content) {
    opacity: 0.2;
  }
</style>
