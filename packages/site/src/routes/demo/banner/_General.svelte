<div>
  <FormField>
    <Checkbox bind:checked={open} />
    <span slot="label">Open</span>
  </FormField>
  <FormField>
    <Checkbox bind:checked={centered} />
    <span slot="label">Centered</span>
  </FormField>
  <FormField>
    <Checkbox bind:checked={mobileStacked} />
    <span slot="label">Mobile Stacked</span>
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
    bind:centered
    bind:mobileStacked
    on:SMUIBanner:closed={handleBannerClosed}
  >
    <Label slot="label">This is a banner with no icon and some actions.</Label>
    <svelte:fragment slot="actions">
      <Button secondary>Secondary</Button>
      <Button>Primary</Button>
    </svelte:fragment>
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
  import Banner, { Label, CloseReason } from '@smui/banner';
  import Button from '@smui/button';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let open = false;
  let centered = false;
  let mobileStacked = true;

  const closedReasons = {
    [CloseReason.PRIMARY]: 'Primary',
    [CloseReason.SECONDARY]: 'Secondary',
    [CloseReason.UNSPECIFIED]: 'Unspecified',
  };
  let closedReason = 'None yet';

  function handleBannerClosed(event: CustomEvent<{ reason: CloseReason }>) {
    closedReason = closedReasons[event.detail.reason];
  }
</script>
