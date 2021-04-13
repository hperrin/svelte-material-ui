<div class="paper-container">
  <Paper square class="paper-demo">
    <Title>Square Paper</Title>
    <Content>
      By adding the <code>square</code> property, the paper gains sharper corners
      and can be used to intimidate foes.
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
