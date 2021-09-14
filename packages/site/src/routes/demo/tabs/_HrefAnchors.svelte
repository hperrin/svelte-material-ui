<div>
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
    <Tab
      {tab}
      href="https://en.wikipedia.org/wiki/{tab.replace(/ /g, '_')}"
      target="href-tabs-frame"
    >
      <Label>{tab}</Label>
    </Tab>
  </TabBar>

  <iframe
    src="https://en.wikipedia.org/wiki/Home"
    title="Selected Tab"
    name="href-tabs-frame"
    style="width: 100%; height: 400px; border: 0;"
  />
</div>

<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let active = 'Home';
</script>
