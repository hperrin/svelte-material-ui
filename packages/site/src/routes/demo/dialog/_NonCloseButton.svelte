<Dialog
  bind:open
  aria-labelledby="nonclose-title"
  aria-describedby="nonclose-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="nonclose-title">Easiest Riddle</Title>
  <Content id="nonclose-content"
    >Only one of these buttons will close the dialog. Can you guess which one?</Content
  >
  <Actions>
    <!--
      The `action=""` here will cause the dialog to stay open. The default
      action is "close".
    -->
    <Button action="" onclick={() => (clicked = "It didn't close, did it?")}>
      <Label>It's the Other One</Label>
    </Button>
    <Button onclick={() => (clicked = 'I told you.')}>
      <Label>It's This One</Label>
    </Button>
  </Actions>
</Dialog>

<Button onclick={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let open = $state(false);
  let clicked = $state('Nothing yet.');
</script>
