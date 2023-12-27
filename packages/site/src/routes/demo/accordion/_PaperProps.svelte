<div class="accordion-container">
  <Accordion class="demo-small-titles">
    <Panel
      square
      variant="outlined"
      color="primary"
      extend
      bind:open={panel1Open}
    >
      <Header>
        Panel 1
        <span slot="description">Description of panel 1.</span>
        <IconButton slot="icon" toggle pressed={panel1Open}>
          <Icon class="material-icons" on>unfold_less</Icon>
          <Icon class="material-icons">unfold_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 1.</Content>
    </Panel>
    <Panel
      square
      variant="outlined"
      color="secondary"
      extend
      bind:open={panel2Open}
    >
      <Header>
        Panel 2
        <span slot="description">Description of panel 2.</span>
        <IconButton slot="icon" toggle pressed={panel2Open}>
          <Icon class="material-icons" on>unfold_less</Icon>
          <Icon class="material-icons">unfold_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel
      square
      variant="outlined"
      color="secondary"
      extend
      bind:open={panel3Open}
    >
      <Header>
        Panel 3
        <span slot="description">Description of panel 3.</span>
        <IconButton slot="icon" toggle pressed={panel3Open}>
          <Icon class="material-icons" on>unfold_less</Icon>
          <Icon class="material-icons">unfold_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 3.</Content>
    </Panel>
    <Panel
      square
      variant="outlined"
      color="secondary"
      extend
      bind:open={panel4Open}
    >
      <Header>
        Panel 4
        <span slot="description">Description of panel 4.</span>
        <IconButton slot="icon" toggle pressed={panel4Open}>
          <Icon class="material-icons" on>unfold_less</Icon>
          <Icon class="material-icons">unfold_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import IconButton, { Icon } from '@smui/icon-button';

  let panel1Open = false;
  let panel2Open = false;
  let panel3Open = false;
  let panel4Open = false;
</script>

<style>
  *
    :global(
      .demo-small-titles .smui-accordion__header__title--with-description
    ) {
    flex-basis: 20% !important;
    max-width: 200px !important;
  }
</style>
