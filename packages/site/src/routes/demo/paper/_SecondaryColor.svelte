<div class="paper-container">
  <Paper color="secondary">
    <Title>Secondary Paper</Title>
    <Content>
      Paper can have a color, allowing you to construct fancy school projects
      with the colored paper and glue sticks.
    </Content>
  </Paper>

  <Paper color="secondary" variant="unelevated">
    <Title>Unelevated Secondary Paper</Title>
    <Content>
      Unelevated secondary paper is nice because it will pretty much always
      stand out, even in light mode.
    </Content>
  </Paper>

  <Paper color="secondary" variant="outlined">
    <Title>Outlined Secondary Paper</Title>
    <Content>Outlined secondary paper has a neat border.</Content>
  </Paper>

  <Paper color="secondary" variant="outlined" class="mdc-theme--secondary">
    <Title>Outlined Secondary Paper with Secondary Text</Title>
    <Content>
      Outlined secondary paper with secondary color text. For the times when you
      need to draw attention.
    </Content>
  </Paper>
</div>

<script lang="ts">
  import Paper, { Title, Content } from '@smui/paper';
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
