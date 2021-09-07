# Svelte Material UI - Circular Progress

A circular progress indicator.

# Installation

```sh
npm install --save-dev @smui/circular-progress
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/circular-progress)

[See the demo code.](/site/src/routes/demo/circular-progress/)

# Basic Usage

```svelte
<CircularProgress indeterminate {closed} />

<script>
  import CircularProgress from '@smui/circular-progress';
  import someAsyncAction from './someAsyncAction.js';

  let closed = false;

  someAsyncAction(() => {
    closed = true;
  });
</script>
```

# Exports

## (default)

A Circular Progress component.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `indeterminate`: `false` - Whether the progress value is unknown. This causes the indicator to display a cyclical animation.
- `closed`: `false` - Whether the indicator should be hidden. Using this instead of an `#if` block is recommended, because the height of the container will not change when it is shown/hidden.
- `progress`: `0` - The progress to indicate. (float between 0 and 1, inclusive)
- `fourColor`: `false` - Whether the indeterminate indicator will cycle through four colors.

# More Information

See [Progress indicators](https://material.io/components/progress-indicators) in the Material design spec.

See [Circular Progress](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-circular-progress) in MDC-Web for information about the upstream library's architecture.
