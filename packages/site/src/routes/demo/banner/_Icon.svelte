<div>
  <FormField>
    <Checkbox bind:checked={open} />
    {#snippet label()}
      Open
    {/snippet}
  </FormField>
  <FormField>
    <Checkbox bind:checked={centered} />
    {#snippet label()}
      Centered
    {/snippet}
  </FormField>
  <FormField>
    <Checkbox bind:checked={mobileStacked} />
    {#snippet label()}
      Mobile Stacked
    {/snippet}
  </FormField>
</div>

<pre class="status">Closed Reason: {closedReason}</pre>

<div class="top-app-bar-container">
  <TopAppBar variant="static">
    <Row>
      <Section>
        <Title>Top App Bar</Title>
      </Section>
    </Row>
  </TopAppBar>
  <Banner
    bind:open
    {centered}
    {mobileStacked}
    onSMUIBannerClosed={handleBannerClosed}
  >
    {#snippet icon()}
      <Icon class="material-icons">favorite</Icon>
    {/snippet}
    {#snippet label()}
      <Label>This is a banner with an icon and some actions.</Label>
    {/snippet}
    {#snippet actions()}
      <Button secondary>Secondary</Button>
      <Button>Primary</Button>
    {/snippet}
  </Banner>
  <div>
    <img
      alt="Page content placeholder"
      src="/page-content.jpg"
      style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
    />
  </div>
</div>

<script lang="ts">
  import Banner, { Label, Icon, CloseReason } from '@smui/banner';
  import Button from '@smui/button';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let open = $state(false);
  let centered = $state(false);
  let mobileStacked = $state(true);

  const closedReasons = {
    [CloseReason.PRIMARY]: 'Primary',
    [CloseReason.SECONDARY]: 'Secondary',
    [CloseReason.UNSPECIFIED]: 'Unspecified',
  };
  let closedReason = $state('None yet.');

  function handleBannerClosed(event: CustomEvent<{ reason: CloseReason }>) {
    closedReason = closedReasons[event.detail.reason];
  }
</script>
