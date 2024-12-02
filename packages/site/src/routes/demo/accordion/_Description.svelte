<div class="accordion-container">
  <Accordion>
    <Panel>
      <Header>
        Panel 1
        {#snippet description()}
          Description of panel 1.
        {/snippet}
      </Header>
      <Content>The content for panel 1.</Content>
    </Panel>
    <Panel>
      <Header>
        Panel 2
        {#snippet description()}
          Description of panel 2.
        {/snippet}
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel>
      <Header>
        Panel 3
        {#snippet description()}
          Description of panel 3.
        {/snippet}
      </Header>
      <Content>The content for panel 3.</Content>
    </Panel>
    <Panel>
      <Header>
        Panel 4
        {#snippet description()}
          Description of panel 4.
        {/snippet}
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
</script>
