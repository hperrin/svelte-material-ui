<div class="paper-container">
  <Paper color="primary">
    <Title>Primary Paper</Title>
    <Content>
      Paper can have a color, allowing you to construct fancy school projects
      with the colored paper and glue sticks.
    </Content>
  </Paper>

  <Paper color="primary" variant="unelevated">
    <Title>Unelevated Primary Paper</Title>
    <Content>
      Unelevated primary paper is nice because it will pretty much always stand
      out, even in light mode.
    </Content>
  </Paper>

  <Paper color="primary" variant="outlined">
    <Title>Outlined Primary Paper</Title>
    <Content>Outlined primary paper has a neat border.</Content>
  </Paper>

  <Paper color="primary" variant="outlined" class="mdc-theme--primary">
    <Title>Outlined Primary Paper with Primary Text</Title>
    <Content>
      Outlined primary paper with primary color text. For the times when you
      need to draw attention.
    </Content>
  </Paper>
</div>

<script lang="ts">
  import Paper, { Title, Content } from '@smui/paper';
</script>
