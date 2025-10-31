<div>
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} bind:active>
    {#snippet tab(tab)}
      <Tab
        {tab}
        href="https://en.wikipedia.org/wiki/{tab.replace(/ /g, '_')}"
        target="href-tabs-frame"
      >
        <Label>{tab}</Label>
      </Tab>
    {/snippet}
  </TabBar>

  <iframe
    src="https://en.wikipedia.org/wiki/Home"
    title="Selected Tab"
    name="href-tabs-frame"
    style="width: 100%; height: 400px; border: 0;"
    role="tabpanel"
  ></iframe>
</div>

<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let active = $state('Home');
</script>
