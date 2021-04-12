<svelte:head>
  <title>Banner - SMUI</title>
</svelte:head>

<Banner
  open
  fixed
  mobileStacked
  content$style="max-width: 100%;"
  textWrapper$style="width: max-content;"
>
  <Label slot="label"
    >This is a fixed banner! It's here to let you know an important thing. Once
    you've successfully known the thing, you can dismiss it.</Label
  >
  <Button slot="actions">I Know It</Button>
</Banner>

<section>
  <h2>Banner</h2>

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
    <FormField>
      <Checkbox bind:checked={icon} />
      <span slot="label">Icon</span>
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
    {#if icon}
      <Banner
        bind:open
        bind:centered
        bind:mobileStacked
        on:MDCBanner:closed={(event) => (closedReason = event.detail.reason)}
      >
        <Icon slot="icon" class="material-icons">favorite</Icon>
        <Label slot="label"
          >This is a banner with an icon and some actions.</Label
        >
        <svelte:fragment slot="actions">
          <Button secondary>Secondary</Button>
          <Button>Primary</Button>
        </svelte:fragment>
      </Banner>
    {:else}
      <Banner
        bind:open
        bind:centered
        bind:mobileStacked
        on:MDCBanner:closed={(event) => (closedReason = event.detail.reason)}
      >
        <Label slot="label"
          >This is a banner with no icon and some actions.</Label
        >
        <svelte:fragment slot="actions">
          <Button secondary>Secondary</Button>
          <Button>Primary</Button>
        </svelte:fragment>
      </Banner>
    {/if}
    <div>
      <LoremIpsum />
    </div>
  </div>
</section>

<script>
  import Banner, { Label, Icon } from '@smui/banner';
  import Button from '@smui/button';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LoremIpsum from '../../../components/LoremIpsum.svelte';

  let open = true;
  let centered = false;
  let mobileStacked = true;
  let icon = true;

  let closedReason = 'None yet.';
</script>

<style>
  .top-app-bar-container {
    width: calc(100% - 48px);
    margin: 24px;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 18px 18px 0;

    overflow: auto;
    display: inline-block;
  }
</style>
