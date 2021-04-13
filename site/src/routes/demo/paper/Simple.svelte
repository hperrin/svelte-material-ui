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
    background-color: #f8f8f8;
    padding: 36px 18px;
  }

  * :global(.paper-demo) {
    margin: 0 auto;
    max-width: 600px;
  }
</style>
