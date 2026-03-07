# Svelte Material UI - Form Field

A wrapper to align an input and its label.

SMUI Form Fields make the Input/Label RTL-aware and also activates a ripple effect.

# Installation

```sh
npm install --save-dev @smui/form-field
```

# Examples and Usage Information

https://sveltematerialui.com/demo/form-field

# Exports

## (default)

A Form Field component.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `align`: `'start'` - Where to align the input. ('start' or 'end')
- `inputId`: `(programatically assigned)` - The ID of the input the label is to be associated with.

The ID is generated using a module context counter, so you don't need to provide one yourself. The format is `SMUI-form-field-{counter}`, and the counter starts at 0.

### Forwarded Props

- `label$` - Props forwarded to the label element.
