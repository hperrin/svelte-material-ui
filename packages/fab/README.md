# Svelte Material UI - Floating Action Button

Floating action buttons represent the primary action in a screen or app.

See [MDC Floating Action Button](https://material.io/develop/web/components/buttons/floating-action-buttons/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-fab/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/fab
```

# Basic Usage

```html
<script>
  import Fab, {Icon} from '@smui/fab';

  function doSomething() {
    alert('something');
  }
</script>

<Fab on:click={doSomething}><Icon class="material-icons">favorite</Icon></Fab>
```

# Demo

*in action:* https://sveltematerialui.com/demo/fab

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/fab.svelte

# Exports

## (default)

A floating action button.

### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
* `color`: `'secondary'` - The FAB's color. ('primary' or 'secondary')
* `mini`: `false` - Whether to make the FAB smaller.
* `exited`: `false` - Whether the FAB is not visible. Changing this will cause the FAB to animate in/out.
* `extended`: `false` - Whether the FAB contains a label.

### Events

All standard UI events are forwarded.

## Label

A text label.

See the [common label readme](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#label).

## Icon

A graphic icon.

See the [common icon readme](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#icon).