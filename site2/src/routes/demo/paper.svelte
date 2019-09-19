<svelte:head>
  <title>Paper - SMUI</title>
</svelte:head>

<section>
  <h2>Paper</h2>

  <div>
    <div class="paper-container">
      <Paper class="paper-demo">
        <Title>Paper</Title>
        <Subtitle>This is a sheet of paper.</Subtitle>
        <Content>Paper is used to build an elevated surface.</Content>
      </Paper>
    </div>
  </div>

  <div>
    Square paper: <br />

    <div class="paper-container">
      <Paper square class="paper-demo">
        <Title>Square Paper</Title>
        <Content>By adding the <code>square</code> property, the paper gains sharper corners and can be used to intimidate foes.</Content>
      </Paper>
    </div>
  </div>

  <div>
    Paper color: <br />

    <div class="paper-container">
      <Paper color="primary" class="paper-demo">
        <Title>Primary Paper</Title>
        <Content>Paper can have a color, allowing you to construct fancy school projects with the colored paper and glue sticks.</Content>
      </Paper>
    </div>

    <div class="paper-container">
      <Paper color="secondary" class="paper-demo">
        <Title>Secondary Paper</Title>
        <Content>Paper can have a color, allowing you to construct fancy school projects with the colored paper and glue sticks.</Content>
      </Paper>
    </div>
  </div>

  <div>
    Elevation and transition: <br />

    <div class="paper-container">
      <Paper transition {elevation} {color} class="paper-demo">
        <Title>Elevated Paper</Title>
        <Content>
          If you add the <code>transition</code> property, elevation changes will animate.

          <br /><br />

          <Paper elevation={0}>
            <div>
              <FormField align="end" style="display: flex;">
                <Slider bind:value={elevation} min={0} max={24} discrete />
                <span slot="label" style="padding-right: 12px; width: max-content; display: block;">Elevation</span>
              </FormField>
            </div>

            <div>
              <FormField>
                <Radio bind:group={color} value="default" />
                <span slot="label">Default</span>
              </FormField>
              <FormField>
                <Radio bind:group={color} value="primary" />
                <span slot="label">Primary</span>
              </FormField>
              <FormField>
                <Radio bind:group={color} value="secondary" />
                <span slot="label">Secondary</span>
              </FormField>
            </div>
          </Paper>
        </Content>
      </Paper>
    </div>
  </div>
</section>

<script>
  import Paper, {Title, Subtitle, Content} from '@smui/paper';
  import Slider from '@smui/slider';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let elevation = 1;
  let color = 'default';
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