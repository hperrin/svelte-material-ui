<pre class="status">Action Clicked: {action}</pre>

<div class="top-app-bar-container">
  <TopAppBar variant="static">
    <Row>
      <Section>
        <Title>Top App Bar</Title>
      </Section>
    </Row>
  </TopAppBar>
  <Banner
    open
    autoClose={false}
    on:SMUIBanner:actionClicked={handleActionClicked}
  >
    <Label slot="label">This is a banner with actions to click.</Label>
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
  import type { Action } from '@smui/banner';
  import Banner, { Label } from '@smui/banner';
  import Button from '@smui/button';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

  const actions = {
    [0]: 'Primary',
    [1]: 'Secondary',
    [2]: 'Unknown',
  };
  let action = 'None yet';

  function handleActionClicked(event: CustomEvent<{ action: Action }>) {
    action = actions[event.detail.action];
  }
</script>
