<div class="paper-container">
  <Paper transition {elevation} {color}>
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

<script lang="ts">
  import Paper, { Title, Content } from '@smui/paper';
  import Slider from '@smui/slider';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let elevation = 1;
  let color = 'default';
</script>
