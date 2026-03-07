# Svelte Material UI - Floating Label

A floating label in an input field. This is usually provided by the input component, but you can set it up manually.

# Installation

You won't generally need to install this package, unless you're manually creating text fields.

```sh
npm install --save-dev @smui/floating-label
```

# Examples and Usage Information

https://sveltematerialui.com/demo/textfield

# Exports

## (default)

A Floating Label component.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `for`: `''` - The ID of the input the label is to be associated with.
- `floatAbove`: `false` - Float the label above.
- `required`: `false` - Add required styling (an asterisk).
- `wrapped`: `false` - If the label is wrapped, a `span` element is used with no `for` attribute, otherwise, a `label` element is used with a `for` attribute.

### Functions

- `shake(boolean)` - Shakes the label element.
- `float(boolean)` - Floats the label element.
- `getWidth()` - Get the width of the label element.
- `setRequired(boolean)` - Set the `required` property.

# More Information

See [Text fields](https://m2.material.io/components/text-fields) in the Material design spec.
