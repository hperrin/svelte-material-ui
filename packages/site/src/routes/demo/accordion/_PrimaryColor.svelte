<div class="accordion-container">
  <Accordion>
    <Panel color="primary" bind:open={panel1Open}>
      <Header>
        Panel 1
        {#snippet description()}
          Description of panel 1.
        {/snippet}
        {#snippet icon()}
          <IconButton toggle pressed={panel1Open}>
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
          </IconButton>
        {/snippet}
      </Header>
      <Content>The content for panel 1.</Content>
    </Panel>
    <Panel color="primary" bind:open={panel2Open}>
      <Header>
        Panel 2
        {#snippet description()}
          Description of panel 2.
        {/snippet}
        {#snippet icon()}
          <IconButton toggle pressed={panel2Open}>
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
          </IconButton>
        {/snippet}
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel color="primary" bind:open={panel3Open}>
      <Header>
        Panel 3
        {#snippet description()}
          Description of panel 3.
        {/snippet}
        {#snippet icon()}
          <IconButton toggle pressed={panel3Open}>
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
          </IconButton>
        {/snippet}
      </Header>
      <Content>The content for panel 3.</Content>
    </Panel>
    <Panel color="primary" bind:open={panel4Open}>
      <Header>
        Panel 4
        {#snippet description()}
          Description of panel 4.
        {/snippet}
        {#snippet icon()}
          <IconButton toggle pressed={panel4Open}>
            <Icon class="material-icons" on>expand_less</Icon>
            <Icon class="material-icons">expand_more</Icon>
          </IconButton>
        {/snippet}
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import IconButton, { Icon } from '@smui/icon-button';

  let panel1Open = $state(false);
  let panel2Open = $state(false);
  let panel3Open = $state(false);
  let panel4Open = $state(false);
</script>
