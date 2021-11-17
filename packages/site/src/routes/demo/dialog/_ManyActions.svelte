<Dialog
  bind:open
  aria-labelledby="buttons-title"
  aria-describedby="buttons-content"
  autoStackButtons={false}
  on:SMUIDialog:closed={(e) => (buttoned = e.detail.action)}
>
  <Title id="buttons-title">Use speed bost?</Title>
  <Content id="buttons-content">
    Speed boost opens the extra holes in your device to increase aerodynamics.
    This allows your device to reach higher maximum speed, increasing your
    productivity.
  </Content>
  <Actions>
    <Button action="no">
      <Label>No Thanks</Label>
    </Button>
    <Button action="later">
      <Label>Remind Me Later</Label>
    </Button>
    <Button action="speed-bost">
      <Label>Turn on Speed Boost</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Action: {buttoned}</pre>

<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let open = false;
  let buttoned = 'Nothing yet.';
</script>
