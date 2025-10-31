<div style="margin-bottom: 1em;">
  <FormField>
    <Checkbox bind:checked={disabled} />
    {#snippet label()}
      Disable the second panel.
    {/snippet}
  </FormField>
  <FormField>
    <Checkbox bind:checked={nonInteractive} />
    {#snippet label()}
      No interaction with the third panel.
    {/snippet}
  </FormField>
</div>

<div class="accordion-container">
  <Accordion multiple>
    <Panel>
      <Header>Normal Panel</Header>
      <Content>The content for normal panel.</Content>
    </Panel>
    <Panel {disabled}>
      <Header>Disabled Panel</Header>
      <Content>The content for disabled panel.</Content>
    </Panel>
    <Panel {nonInteractive}>
      <Header ripple={!nonInteractive}>Non-Interactive Panel</Header>
      <Content>The content for non-interactive panel.</Content>
    </Panel>
    <Panel nonInteractive open>
      <Header ripple={false}>Non-Interactive Open Panel</Header>
      <Content>The content for non-interactive open panel.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let disabled = $state(true);
  let nonInteractive = $state(true);
</script>
