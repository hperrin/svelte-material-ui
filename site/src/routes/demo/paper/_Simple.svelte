<div class="paper-container">
  <Paper class="paper-demo">
    <Title>Paper</Title>
    <Subtitle>This is a sheet of paper.</Subtitle>
    <Content>Paper is used to build an elevated surface.</Content>
  </Paper>
</div>

<script>
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
</script>

<style>
  .paper-container {
    padding: 36px 18px;
    background-color: var(--mdc-theme-background, #f8f8f8);
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }

  * :global(.paper-demo) {
    margin: 0 auto;
    max-width: 600px;
  }
</style>
