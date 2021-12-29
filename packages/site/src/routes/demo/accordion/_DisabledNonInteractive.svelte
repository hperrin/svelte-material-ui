<div class="accordion-container">
  <Accordion multiple>
    <Panel>
      <Header>Normal Panel</Header>
      <Content>The content for normal panel.</Content>
    </Panel>
    <Panel disabled>
      <Header>Disabled Panel</Header>
      <Content>The content for disabled panel.</Content>
    </Panel>
    <Panel nonInteractive>
      <Header ripple={false}>Non-Interactive Closed Panel</Header>
      <Content>The content for non-interactive closed panel.</Content>
    </Panel>
    <Panel nonInteractive open>
      <Header ripple={false}>Non-Interactive Open Panel</Header>
      <Content>The content for non-interactive open panel.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
</script>
