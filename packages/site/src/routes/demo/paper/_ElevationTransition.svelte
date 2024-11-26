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
            {#snippet label()}
              <span
                style="padding-inline-end: 12px; width: max-content; display: block;"
              >
                Elevation
              </span>
            {/snippet}
          </FormField>
        </div>

        <div>
          <FormField>
            <Radio bind:group={color} value="default" />
            {#snippet label()}
              Default
            {/snippet}
          </FormField>
          <FormField>
            <Radio bind:group={color} value="primary" />
            {#snippet label()}
              Primary
            {/snippet}
          </FormField>
          <FormField>
            <Radio bind:group={color} value="secondary" />
            {#snippet label()}
              Secondary
            {/snippet}
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

  let elevation = $state(1);
  let color = $state('default');
</script>
