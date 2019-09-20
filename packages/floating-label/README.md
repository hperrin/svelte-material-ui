# Svelte Material UI - Floating Label

A floating label in an input field. This is usually provided by the input component, but you can set it up manually.

See [MDC Floating Label](https://material.io/develop/web/components/input-controls/floating-label/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-floating-label/_variables.scss) for styling variables.

# Installation

You won't generally need to install this package, unless you're manually creating text fields.

```sh
npm install --save-dev @smui/floating-label
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
  Normally you wouldn't provide a floating label, but you can manually set up a
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

## (default)

A Floating Label component.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `for`: `''` - The ID of the input the label is to be associated with.
* `wrapped`: `false` - If the label is wrapped, a `span` element is used with no `for` attribute, otherwise, a `label` element is used with a `for` attribute.

### Events

All standard UI events are forwarded.

### Functions

* `shake(boolean)` - Shakes the label element.
* `float(boolean)` - Floats the label element.
* `getWidth()` - Get the width of the label element.
