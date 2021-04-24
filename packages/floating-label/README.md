# Svelte Material UI - Floating Label

A floating label in an input field. This is usually provided by the input component, but you can set it up manually.

# Installation

You won't generally need to install this package, unless you're manually creating text fields.

```sh
npm install --save-dev @smui/floating-label
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/textfield)

[See the demo code.](/site/src/routes/demo/textfield/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<!--
  Normally you wouldn't provide a floating label, but you can manually set up a
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

## (default)

A Floating Label component.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `for`: `''` - The ID of the input the label is to be associated with.
- `wrapped`: `false` - If the label is wrapped, a `span` element is used with no `for` attribute, otherwise, a `label` element is used with a `for` attribute.

### Functions

- `shake(boolean)` - Shakes the label element.
- `float(boolean)` - Floats the label element.
- `getWidth()` - Get the width of the label element.

# More Information

See [Text fields](https://material.io/components/text-fields) in the Material design spec.

See [Floating Label](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-floating-label) in MDC-Web for information about the upstream library's architecture.
