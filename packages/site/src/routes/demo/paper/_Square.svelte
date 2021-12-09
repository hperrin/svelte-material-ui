<div class="paper-container">
  <Paper square>
    <Title>Square Paper</Title>
    <Content>
      By adding the <code>square</code> property, the paper gains sharper corners
      and can be used to intimidate foes.
    </Content>
  </Paper>

  <Paper square variant="unelevated">
    <Title>Unelevated Square Paper</Title>
    <Content>
      Unelevated square paper is pretty much a sheet of paper embedded in the
      floor.
    </Content>
  </Paper>

  <Paper square variant="outlined">
    <Title>Outlined Square Paper</Title>
    <Content>Outlined square paper... is it really paper anymore?</Content>
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
