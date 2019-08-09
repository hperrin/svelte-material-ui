<section>
  <h2>Top App Bar</h2>

  <div>
    <FormField>
      <Checkbox bind:checked={prominent} />
      <span slot="label">Prominent</span>
    </FormField>
    <FormField>
      <Checkbox bind:checked={dense} />
      <span slot="label">Dense</span>
    </FormField>
  </div>

  <div class="flexy">
    <div class="top-app-bar-container">
      <TopAppBar variant="static" {prominent} {dense}>
        <Row>
          <Section>
            <IconButton class="material-icons">menu</IconButton>
            <Title>Static</Title>
          </Section>
          <Section align="end" toolbar>
            <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
            <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
            <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
          </Section>
        </Row>
      </TopAppBar>
      <div>
        <LoremIpsum />
      </div>
    </div>

    <div class="top-app-bar-container flexor">
      <TopAppBar variant="static" {prominent} {dense}>
        <Row>
          <Section>
            <IconButton class="material-icons">menu</IconButton>
            <Title>Flex Static</Title>
          </Section>
          <Section align="end" toolbar>
            <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
            <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
            <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
          </Section>
        </Row>
      </TopAppBar>
      <div class="flexor-content">
        <LoremIpsum />
      </div>
    </div>
  </div>

  <iframe class="top-app-bar-iframe" src="component-demos/TopAppBar/standard.html" title="standard" width="480" height="320"></iframe>

  <iframe class="top-app-bar-iframe" src="component-demos/TopAppBar/fixed.html" title="fixed" width="480" height="320"></iframe>

  <iframe class="top-app-bar-iframe" src="component-demos/TopAppBar/dense.html" title="dense" width="480" height="320"></iframe>

  <iframe class="top-app-bar-iframe" src="component-demos/TopAppBar/prominent.html" title="dense" width="480" height="320"></iframe>

  <iframe class="top-app-bar-iframe" src="component-demos/TopAppBar/short.html" title="dense" width="480" height="320"></iframe>

  <iframe class="top-app-bar-iframe" src="component-demos/TopAppBar/shortclosed.html" title="dense" width="480" height="320"></iframe>
</section>

<script>
  import TopAppBar, {Row, Section, Title} from 'svelte-material-ui/components/top-app-bar';
  import IconButton from 'svelte-material-ui/components/icon-button';
  import Checkbox from 'svelte-material-ui/components/checkbox';
  import FormField from 'svelte-material-ui/components/form-field';
  import LoremIpsum from '../LoremIpsum.svelte';

  let prominent = false;
  let dense = false;
</script>

<style>
  .top-app-bar-container, .top-app-bar-iframe {
    max-width: 480px;
    height: 320px;
    border: 1px solid rgba(0,0,0,.1);
    margin: 0 18px 18px 0;
  }

  .top-app-bar-container {
    overflow: auto;
    display: inline-block;
  }

  .flexy {
    display: flex;
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