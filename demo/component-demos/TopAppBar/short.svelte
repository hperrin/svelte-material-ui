<TopAppBar variant="short">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Short</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
    </Section>
  </Row>
</TopAppBar>
<div use:ShortFixedAdjust>
  <LoremIpsum />
</div>

<script>
  import TopAppBar, {Row, Section, Title, ShortFixedAdjust} from 'svelte-material-ui/components/top-app-bar';
  import IconButton from 'svelte-material-ui/components/icon-button';
  import LoremIpsum from '../../LoremIpsum.svelte';
</script>