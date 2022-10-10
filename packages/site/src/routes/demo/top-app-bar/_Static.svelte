<div>
  <FormField>
    <Checkbox bind:checked={prominent} />
    <span slot="label">Prominent</span>
  </FormField>
  <FormField>
    <Checkbox bind:checked={dense} />
    <span slot="label">Dense</span>
  </FormField>
  <FormField>
    <Checkbox bind:checked={secondaryColor} />
    <span slot="label">Secondary</span>
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
          <IconButton class="material-icons">menu</IconButton>
          <Title>Flex Static</Title>
        </Section>
        <Section align="end" toolbar>
          <IconButton class="material-icons" aria-label="Download"
            >file_download</IconButton
          >
          <IconButton class="material-icons" aria-label="Print this page"
            >print</IconButton
          >
          <IconButton class="material-icons" aria-label="Bookmark this page"
            >bookmark</IconButton
          >
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
          <IconButton class="material-icons">menu</IconButton>
          <Title>Static</Title>
        </Section>
        <Section align="end" toolbar>
          <IconButton class="material-icons" aria-label="Download"
            >file_download</IconButton
          >
          <IconButton class="material-icons" aria-label="Print this page"
            >print</IconButton
          >
          <IconButton class="material-icons" aria-label="Bookmark this page"
            >bookmark</IconButton
          >
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
  import IconButton from '@smui/icon-button';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let prominent = false;
  let dense = false;
  let secondaryColor = false;
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
