# Svelte Material UI - Linear Progress

A linear progress indicator.

See [MDC Linear Progress](https://material.io/develop/web/components/linear-progress/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-linear-progress/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/linear-progress
```

# Basic Usage

```html
<script>
  import LinearProgress from '@smui/linear-progress';
  import someAsyncAction from './someAsyncAction.js';

  let closed = false;

  someAsyncAction(() => {
    closed = true;
  });
</script>

<LinearProgress indeterminate {closed} />
```

# Demo

*in action:* https://sveltematerialui.com/demo/linear-progress

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/linear-progress.svelte and https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/linear-progress.scss

# Exports

## (default)

A Linear Progress component.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `indeterminate`: `false` - Whether the progress value is unknown. This causes the indicator to display a cyclical animation.
* `reversed`: `false` - Whether to reverse the indicator.
* `closed`: `false` - Whether the indicator should be hidden. Using this instead of an `#if` block is recommended, because the height of the container will not change when it is shown/hidden.
* `progress`: `0` - The progress to indicate. (float between 0 and 1, inclusive)
* `buffer`: `null` - The buffer progress to indicate. (`null` or float between 0 and 1, inclusive)

### Events

All standard UI events are forwarded.
