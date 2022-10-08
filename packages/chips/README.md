# Svelte Material UI - Chips

Chips are used to show discrete information, filter options, input tags, or actions.

# Installation

```sh
npm install --save-dev @smui/chips
```

# Examples and Usage Information

https://sveltematerialui.com/demo/chips

# Exports

## (default)

A chip.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `touch`: `false` - Increase the touch target.
- `shouldRemoveOnTrailingIconClick`: `true` - Whether the chip should be removed upon clicking the trailing icon.
- `shouldFocusPrimaryActionOnClick`: `true` - Whether the chip should focus the primary action when it is clicked.

### Events

- `MDCChip:interaction`
- `MDCChip:selection`
- `MDCChip:removal`
- `MDCChip:trailingIconInteraction`
- `MDCChip:navigation`

## Set

A set of chips. Chips should only be added onto the end of the set's chip array.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `chips` `[]` - An array containing the chips.
- `key` `chip => chip` - A function used to get the key of the chip. Chip sets that have removable chips should always provide unique keys.
- `selected` `undefined` - The currently selected chip or chips.
- `choice` `false` - Whether to present the chips as a set of choices, allowing one to be chosen.
- `filter` `false` - Whether to present the chips as a set of options, allowing any number to be chosen.
- `input` `false` - Whether to present the chips as a set of values, allowing them to be removed.

## Text

A text label.

todo...

## LeadingIcon

A graphic icon.

todo...

## TrailingIcon

A graphic icon.

todo...

## TrailingAction

A graphic icon.

todo...

# More Information

See [Chips](https://material.io/components/chips) in the Material design spec.

See [Chips](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-chips) in MDC-Web for information about the upstream library's architecture.
