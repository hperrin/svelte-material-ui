# Svelte Material UI - Notched Outline

Notched outlines are borders around input components.

See [MDC Notched Outline](https://material.io/develop/web/components/input-controls/notched-outline/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-notched-outline/_variables.scss) for styling variables.

# Installation

You won't generally need to install this package, unless you're manually creating text fields.

```sh
npm install --save-dev @smui/notched-outline
```

# Basic Usage

```html
<script>
  import Textfield, {Input} from '@smui/textfield';
  import FloatingLabel from '@smui/floating-label';
  import NotchedOutline from '@smui/notched-outline';

  let name = '';
</script>

<!--
  Normally you wouldn't provide a notched outline, but you can manually set up a
  textfield like this:
-->
<Textfield variant="outlined">
  <Input bind:value={name} id="name-input" />
  <NotchedOutline>
    <FloatingLabel for="name-input">Name</FloatingLabel>
  </NotchedOutline>
</Textfield>
```

# Demo

*in action:* https://sveltematerialui.com/demo/textfield

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/textfield.svelte

# Exports

todo...