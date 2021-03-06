# Svelte Material UI - Line Ripple

Line ripples are used to highlight input elements above them.

# Installation

You won't generally need to install this package, unless you're manually creating text fields.

```sh
npm install --save-dev @smui/line-ripple
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/textfield)

[See the demo code.](/site/src/routes/demo/textfield/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<!--
  Normally you wouldn't provide a line ripple, but you can manually set up a
  textfield like this:
-->
<Textfield>
  <Input bind:value={name} id="name-input" />
  <FloatingLabel for="name-input">Name</FloatingLabel>
  <LineRipple />
</Textfield>

<script>
  import Textfield, { Input } from '@smui/textfield';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';

  let name = '';
</script>
```

# Exports

todo...

# More Information

See [Text fields](https://material.io/components/text-fields) in the Material design spec.

See [Line Ripple](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-line-ripple) in MDC-Web for information about the upstream library's architecture.
