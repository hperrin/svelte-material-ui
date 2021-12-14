<div class="accordion-container">
  <Accordion>
    <Panel>
      <Header>
        Panel 1
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>The content for panel 1.</Content>
    </Panel>
    <Panel>
      <Header>
        Panel 2
        <span slot="description">Description of panel 2.</span>
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel>
      <Header>
        Panel 3
        <span slot="description">Description of panel 3.</span>
      </Header>
      <Content>The content for panel 3.</Content>
    </Panel>
    <Panel>
      <Header>
        Panel 4
        <span slot="description">Description of panel 4.</span>
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
</script>
