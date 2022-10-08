# Svelte Material UI - Floating Action Button

Floating action buttons represent the primary action in a screen or app.

# Installation

```sh
npm install --save-dev @smui/fab
```

# Examples and Usage Information

https://sveltematerialui.com/demo/fab

# Exports

## (default)

A floating action button.

### Options / Defaults

- `component`: `href == null ? Button : A` - A component to use as the root element.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `color`: `'secondary'` - The FAB's color. ('primary' or 'secondary')
- `mini`: `false` - Whether to make the FAB smaller.
- `exited`: `false` - Whether the FAB is not visible. Changing this will cause the FAB to animate in/out.
- `extended`: `false` - Whether the FAB contains a label.
- `touch`: `false` - Increase the touch target.
- `href`: `undefined` - If the `href` property is set, the button will use an anchor element, instead of a button element.

## Label

A text label.

See the [common label readme](/packages/common/README.md#label).

## Icon

A graphic icon.

See the [common icon readme](/packages/common/README.md#icon).

# More Information

See [Buttons: floating action button](https://material.io/components/buttons-floating-action-button) in the Material design spec.

See [FAB](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-fab) in MDC-Web for information about the upstream library's architecture.
