<div>
  <!--
    Note: tabs must be unique. (They cannot === each other.)
  -->
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
    <!-- Note: the `tab` property is required! -->
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>

  {#if active === 'Home'}
    <Paper variant="unelevated">
      <Content>Welcome to the Home page! I hope you like SMUI!</Content>
    </Paper>
  {:else if active === 'Merchandise'}
    <Paper variant="unelevated">
      <Content>
        You want merch? We got so much cool merch! We got SMUI toilet paper,
        SMUI ironing boards, SMUI gas pedals! Come and get 'em!
      </Content>
    </Paper>
  {:else if active === 'About Us'}
    <Paper variant="unelevated">
      <Content>
        We are a boutique UI library, ready to get you up and running on
        whatever your project is. Whether you're building a web UI for an
        automated toaster or a web UI for an automated coffee maker, SMUI is
        ready for you!
      </Content>
    </Paper>
  {/if}

  <div style="margin-top: 1em;">
    <div>Programmatically select:</div>
    {#each ['Home', 'Merchandise', 'About Us'] as tab}
      <Button on:click={() => (active = tab)}><Label>{tab}</Label></Button>
    {/each}
  </div>
</div>

<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';
  import Paper, { Content } from '@smui/paper';

  let active = 'Home';
</script>
