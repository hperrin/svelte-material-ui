<div class="paper-container">
  <Paper transition {elevation} {color} class="paper-demo">
    <Title>Elevated Paper</Title>
    <Content>
      If you add the <code>transition</code> property, elevation changes will
      animate.

      <br /><br />

      <Paper elevation={0}>
        <div>
          <FormField align="end" style="display: flex;">
            <Slider
              style="flex-grow: 1;"
              bind:value={elevation}
              min={0}
              max={24}
              discrete
            />
            <span
              slot="label"
              style="padding-right: 12px; width: max-content; display: block;"
            >
              Elevation
            </span>
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

<script>
  import Paper, { Title, Content } from '@smui/paper';
  import Slider from '@smui/slider';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let elevation = 1;
  let color = 'default';
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
