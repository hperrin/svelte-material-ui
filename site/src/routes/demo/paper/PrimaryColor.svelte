<div class="paper-container">
  <Paper color="primary" class="paper-demo">
    <Title>Primary Paper</Title>
    <Content>
      Paper can have a color, allowing you to construct fancy school projects
      with the colored paper and glue sticks.
    </Content>
  </Paper>
</div>

<script>
  import Paper, { Title, Content } from '@smui/paper';
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
