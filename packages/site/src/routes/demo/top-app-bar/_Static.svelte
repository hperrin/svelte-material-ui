<div>
  <FormField>
    <Checkbox bind:checked={prominent} />
    {#snippet label()}
      Prominent
    {/snippet}
  </FormField>
  <FormField>
    <Checkbox bind:checked={dense} />
    {#snippet label()}
      Dense
    {/snippet}
  </FormField>
  <FormField>
    <Checkbox bind:checked={secondaryColor} />
    {#snippet label()}
      Secondary
    {/snippet}
  </FormField>
</div>

<div class="flexy">
  <div class="top-app-bar-container flexor">
    <TopAppBar
      variant="static"
      {prominent}
      {dense}
      color={secondaryColor ? 'secondary' : 'primary'}
    >
      <Row>
        <Section>
          <IconButton>
            <Icon class="material-icons">menu</Icon>
          </IconButton>
          <Title>Flex Static</Title>
        </Section>
        <Section align="end" toolbar>
          <IconButton aria-label="Download">
            <Icon class="material-icons">file_download</Icon>
          </IconButton>
          <IconButton aria-label="Print this page">
            <Icon class="material-icons">print</Icon>
          </IconButton>
          <IconButton aria-label="Bookmark this page">
            <Icon class="material-icons">bookmark</Icon>
          </IconButton>
        </Section>
      </Row>
    </TopAppBar>
    <div class="flexor-content">
      <LoremIpsum />
      <img
        alt="Page content placeholder"
        src="/page-content.jpg"
        style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
      />
    </div>
  </div>

  <div class="top-app-bar-container">
    <TopAppBar
      variant="static"
      {prominent}
      {dense}
      color={secondaryColor ? 'secondary' : 'primary'}
    >
      <Row>
        <Section>
          <IconButton>
            <Icon class="material-icons">menu</Icon>
          </IconButton>
          <Title>Static</Title>
        </Section>
        <Section align="end" toolbar>
          <IconButton aria-label="Download">
            <Icon class="material-icons">file_download</Icon>
          </IconButton>
          <IconButton aria-label="Print this page">
            <Icon class="material-icons">print</Icon>
          </IconButton>
          <IconButton aria-label="Bookmark this page">
            <Icon class="material-icons">bookmark</Icon>
          </IconButton>
        </Section>
      </Row>
    </TopAppBar>
    <div>
      <LoremIpsum />
      <img
        alt="Page content placeholder"
        src="/page-content.jpg"
        style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
      />
    </div>
  </div>
</div>

<script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton, { Icon } from '@smui/icon-button';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let prominent = $state(false);
  let dense = $state(false);
  let secondaryColor = $state(false);
</script>

<style>
  .top-app-bar-container {
    max-width: 480px;
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);

    overflow: auto;
    display: inline-block;
  }

  @media (max-width: 480px) {
    .top-app-bar-container {
      margin-right: 0;
    }
  }

  .flexy {
    display: flex;
    flex-wrap: wrap;
  }

  .flexor {
    display: inline-flex;
    flex-direction: column;
  }

  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }
</style>
