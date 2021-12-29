<div class="accordion-container">
  <Accordion multiple>
    <Panel>
      <Header>Panel 1</Header>
      <Content>
        The content for panel 1.

        <ul>
          <li>Some</li>
          <li>List</li>
          <li>Items</li>
        </ul>
      </Content>
    </Panel>
    <Panel>
      <Header>Panel 2</Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel>
      <Header>Panel 3</Header>
      <Content>
        The content for panel 3.

        <ul>
          <li>Some</li>
          <li>More</li>
          <li>List</li>
          <li>Items</li>
          <li>To</li>
          <li>Show</li>
          <li>Big</li>
          <li>Height</li>
        </ul>
      </Content>
    </Panel>
    <Panel>
      <Header>Panel 4</Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
</script>
