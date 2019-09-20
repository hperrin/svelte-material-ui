# Svelte Material UI - Dialog

Dialogs are modal boxes that inform the user and/or accept a decision.

See [MDC Dialog](https://material.io/develop/web/components/dialogs/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-dialog/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/dialog
```

# Basic Usage

```html
<script>
  import Dialog, {Title, Content, Actions} from '@smui/dialog';
  import Button, {Label} from '@smui/button';

  let dialog;

  function deleteItem() {
    // TODO: delete the item.
  }
</script>

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
```

# Demo

*in action:* https://sveltematerialui.com/demo/dialog

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/dialog.svelte

# Exports

todo...