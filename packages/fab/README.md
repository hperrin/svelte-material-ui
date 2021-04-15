# Svelte Material UI - Floating Action Button

Floating action buttons represent the primary action in a screen or app.

# Installation

```sh
npm install --save-dev @smui/fab
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/fab)

[See the demo code.](/site/src/routes/demo/fab/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Fab on:click={doSomething}><Icon class="material-icons">favorite</Icon></Fab>

<script>
  import Fab, { Icon } from '@smui/fab';

  function doSomething() {
    alert('something');
  }
</script>
```

# Exports

## (default)

A floating action button.

### Options / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `color`: `'secondary'` - The FAB's color. ('primary' or 'secondary')
- `mini`: `false` - Whether to make the FAB smaller.
- `exited`: `false` - Whether the FAB is not visible. Changing this will cause the FAB to animate in/out.
- `extended`: `false` - Whether the FAB contains a label.

### Events

All standard UI events are forwarded.

## Label

A text label.

See the [common label readme](/packages/common/README.md#label).

## Icon

A graphic icon.

See the [common icon readme](/packages/common/README.md#icon).

# More Information

See [Buttons: floating action button](https://material.io/components/buttons-floating-action-button) in the Material design spec.

See [FAB](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-fab) in MDC-Web for information about the upstream library's architecture.
