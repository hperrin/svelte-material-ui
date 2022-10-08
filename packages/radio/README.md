# Svelte Material UI - Radio

Radios, or radio buttons, are input elements that give the user a choice between options.

# Installation

```sh
npm install --save-dev @smui/radio
```

# Examples and Usage Information

https://sveltematerialui.com/demo/radio

# Exports

## (default)

A radio.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `disabled`: `false` - Whether the input is disabled.
- `touch`: `false` - Increase the touch target.
- `group`: `undefined` - The selected value of a group of radios.
- `value` : `null` - The value of a radio in a group of radios.
- `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

- `input$` - Props forwarded to the input element.

### Functions

- `getId` - Get the HTML ID of the element.

# More Information

See [Radio buttons](https://material.io/components/radio-buttons) in the Material design spec.

See [Radio](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-radio) in MDC-Web for information about the upstream library's architecture.
