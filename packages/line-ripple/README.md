# Svelte Material UI - Line Ripple

Line ripples are used to highlight input elements above them.

See [MDC Line Ripple](https://material.io/develop/web/components/input-controls/line-ripple/) for more information on API and Sass mixins.

# Installation

You won't generally need to install this package, unless you're manually creating text fields.

```sh
npm install --save-dev @smui/line-ripple
```

# Basic Usage

```html
<script>
  import Textfield, {Input} from '@smui/textfield';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';

  let name = '';
</script>

<!--
  Normally you wouldn't provide a line ripple, but you can manually set up a
  textfield like this:
-->
<Textfield>
  <Input bind:value={name} id="name-input" />
  <FloatingLabel for="name-input">Name</FloatingLabel>
  <LineRipple />
</Textfield>
```

# Demo

*in action:* https://sveltematerialui.com/demo/textfield

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/textfield.svelte

# Exports

todo...