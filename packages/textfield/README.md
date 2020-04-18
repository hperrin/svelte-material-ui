# Svelte Material UI - Text Field

Text fields offer users an area to input text, numbers, files, etc.

See [MDC Text Field](https://material.io/develop/web/components/input-controls/text-field/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-textfield/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/textfield
```

# Basic Usage

```html
<script>
  import Textfield from '@smui/textfield'

  export let name = '';
  export let email = '';
  export let comment = '';
</script>

<Textfield bind:value={name} label="Name" />
<br />
<Textfield type="email" bind:value={email} label="Email" input$autocomplete="email" />
<br />
<Textfield textarea bind:value={comment} label="Comment" />
```

# Demo

*in action:* https://sveltematerialui.com/demo/textfield

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/textfield.svelte

# Exports

todo...
