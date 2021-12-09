<div class="paper-container">
  <Paper>
    <Title>Paper</Title>
    <Subtitle>This is a sheet of paper.</Subtitle>
    <Content>Paper is used to build an elevated surface.</Content>
  </Paper>

  <Paper variant="unelevated">
    <Title>Unelevated Paper</Title>
    <Subtitle>This is an unelevated sheet of paper.</Subtitle>
    <Content>Unelevated paper is used to build a surface.</Content>
  </Paper>

  <Paper variant="outlined">
    <Title>Outlined Paper</Title>
    <Subtitle>This is an outlined sheet of paper.</Subtitle>
    <Content>Outlined paper is used to build a container.</Content>
  </Paper>
</div>

<script lang="ts">
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
</script>

<style>
  .paper-container {
    padding: 36px 18px;
    background-color: var(--mdc-theme-background, #f8f8f8);
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }

  * :global(.smui-paper) {
    margin: 0 auto 36px;
    max-width: 600px;
  }

  * :global(.smui-paper:last-child) {
    margin-bottom: 0;
  }
</style>
