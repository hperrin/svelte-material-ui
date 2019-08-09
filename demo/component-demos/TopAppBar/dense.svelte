<TopAppBar dense>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Dense</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
      <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
      <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
    </Section>
  </Row>
</TopAppBar>
<div use:DenseFixedAdjust>
  <LoremIpsum />
</div>

<script>
  import TopAppBar, {Row, Section, Title, DenseFixedAdjust} from 'svelte-material-ui/components/top-app-bar';
  import IconButton from 'svelte-material-ui/components/icon-button';
  import LoremIpsum from '../../LoremIpsum.svelte';
</script>