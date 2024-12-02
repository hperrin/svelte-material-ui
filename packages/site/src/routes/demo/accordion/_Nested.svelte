<div class="accordion-container">
  <Accordion>
    <Panel>
      <Header>Panel 1</Header>
      <Content>
        <Accordion>
          <Panel color="secondary">
            <Header>Panel 1.1</Header>
            <Content>The content for panel 1.1.</Content>
          </Panel>
          <Panel color="secondary">
            <Header>Panel 1.2</Header>
            <Content>The content for panel 1.2.</Content>
          </Panel>
        </Accordion>
      </Content>
    </Panel>
    <Panel>
      <Header>Panel 2</Header>
      <Content>
        <Accordion>
          <Panel color="secondary">
            <Header>Panel 2.1</Header>
            <Content>The content for panel 2.1.</Content>
          </Panel>
          <Panel color="secondary">
            <Header>Panel 2.2</Header>
            <Content>The content for panel 2.2.</Content>
          </Panel>
        </Accordion>
      </Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
</script>
