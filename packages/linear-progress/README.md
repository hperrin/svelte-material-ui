# Svelte Material UI - Linear Progress

A linear progress indicator.

# Installation

```sh
npm install --save-dev @smui/linear-progress
```

# Examples and Usage Information

https://sveltematerialui.com/demo/linear-progress

# Exports

## (default)

A Linear Progress component.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `indeterminate`: `false` - Whether the progress value is unknown. This causes the indicator to display a cyclical animation.
- `reversed`: `false` - Whether to reverse the indicator.
- `closed`: `false` - Whether the indicator should be hidden. Using this instead of an `#if` block is recommended, because the height of the container will not change when it is shown/hidden.
- `progress`: `0` - The progress to indicate. (float between 0 and 1, inclusive)
- `buffer`: `undefined` - The buffer progress to indicate. (`null` or float between 0 and 1, inclusive)

# More Information

See [Progress indicators](https://material.io/components/progress-indicators) in the Material design spec.

See [Linear Progress](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-linear-progress) in MDC-Web for information about the upstream library's architecture.
