# Svelte Material UI - Switch

Switches are toggles. They're like checkboxes, but cooler.

# Installation

```sh
npm install --save-dev @smui/switch
```

# Examples and Usage Information

https://sveltematerialui.com/demo/switch

# Exports

## (default)

A switch.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `disabled`: `false` - Whether the input is disabled.
- `group`: `(uninitialised)` - The selected values of a group of switches as an array.
- `checked`: `(uninitialised)` - A boolean, whether the switch is checked. This is used instead of `group` for a single switch.
- `value` : `null` - The value of a switch in a group of switches.
- `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

- `input$` - Props forwarded to the input element.

### Functions

- `getId` - Get the HTML ID of the element.

# More Information

See [Switches](https://material.io/components/switches) in the Material design spec.

See [Switch](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-switch) in MDC-Web for information about the upstream library's architecture.
