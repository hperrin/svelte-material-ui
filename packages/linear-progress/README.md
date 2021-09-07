# Svelte Material UI - Linear Progress

A linear progress indicator.

# Installation

```sh
npm install --save-dev @smui/linear-progress
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/linear-progress)

[See the demo code.](/site/src/routes/demo/linear-progress/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<LinearProgress indeterminate {closed} />

<script>
  import LinearProgress from '@smui/linear-progress';
  import someAsyncAction from './someAsyncAction.js';

  let closed = false;

  someAsyncAction(() => {
    closed = true;
  });
</script>
```

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
- `buffer`: `null` - The buffer progress to indicate. (`null` or float between 0 and 1, inclusive)

# More Information

See [Progress indicators](https://material.io/components/progress-indicators) in the Material design spec.

See [Linear Progress](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-linear-progress) in MDC-Web for information about the upstream library's architecture.
