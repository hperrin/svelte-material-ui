<h6 class="demo-title">Scrolling tabs with no initial active tab</h6>

<div>
  <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>
    <Tab {tab}>
      <Label>Tab {tab}</Label>
    </Tab>
  </TabBar>
</div>

<script>
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
</script>
