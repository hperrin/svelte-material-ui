# Svelte Material UI - Dialog

Dialogs are modal boxes that inform the user and/or accept a decision.

# Installation

```sh
npm install --save-dev @smui/dialog
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/dialog)

[See the demo code.](/site/src/routes/demo/dialog/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Dialog
  bind:this={dialog}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-content"
  on:MDCDialog:closed={closeHandler}
>
  <Title id="dialog-title">Delete Item</Title>
  <Content id="dialog-content">
    Are you sure you want to delete the item?
  </Content>
  <Actions>
    <Button>
      <Label>Cancel</Label>
    </Button>
    <Button on:click={deleteItem}>
      <Label>Delete</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => dialog.open()}><Label>Delete</Label></Button>

<script>
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let dialog;

  function deleteItem() {
    // TODO: delete the item.
  }
</script>
```

# Exports

todo...

# More Information

See [Dialogs](https://material.io/components/dialogs) in the Material design spec.

See [Dialog](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-dialog) in MDC-Web for information about the upstream library's architecture.
