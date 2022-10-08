# Svelte Material UI - Checkbox

Checkbox is used to provide the same functionality as `<input type="checkbox">`.

# Installation

```sh
npm install --save-dev @smui/checkbox
```

# Examples and Usage Information

https://sveltematerialui.com/demo/checkbox

# Exports

## (default)

A checkbox.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `disabled`: `false` - Whether the input is disabled.
- `touch`: `false` - Increase the touch target.
- `indeterminate`: `(uninitialised)` - Whether the state is indeterminate.
- `group`: `(uninitialised)` - The selected values of a group of checkboxes as an array.
- `checked`: `(uninitialised)` - A boolean, whether the checkbox is checked. This is used instead of `group` for a single checkbox.
- `value` : `null` - The value of a checkbox in a group of checkboxes.
- `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

- `input$` - Props forwarded to the input element.

### Functions

- `getId` - Get the HTML ID of the element.

# More Information

See [Checkboxes](https://material.io/components/checkboxes) in the Material design spec.

See [Checkbox](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-checkbox) in MDC-Web for information about the upstream library's architecture.
