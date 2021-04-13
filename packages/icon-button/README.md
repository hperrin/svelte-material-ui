# Svelte Material UI - Icon Button

Icon buttons are symbolic buttons or toggles.

# Installation

```sh
npm install --save-dev @smui/icon-button
```

# Demo

_in action:_ https://sveltematerialui.com/demo/icon-button

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/icon-button/

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<IconButton class="material-icons" on:click={doSomething}>build</IconButton>

<IconButton toggle bind:pressed={starred}>
  <Icon class="material-icons" on>star</Icon>
  <Icon class="material-icons">star_border</Icon>
</IconButton>

<script>
  import IconButton, { Icon } from '@smui/icon-button';

  let starred = false;

  function doSomething() {
    alert('something');
  }
</script>
```

# Exports

## (default)

An icon button.

### Options / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `color`: `null` - A color passed to the ripple action.
- `toggle`: `false` - Whether the button is a toggle. A toggle button should have two `Icon` children, one with the `on` prop.
- `pressed`: `false` - Whether the toggle button is pressed.
- `href`: `null` - A hyperlink ref attribute. If this is present, the icon button will use an `a` element instead of a `button` element.

### Events

All standard UI events are forwarded.

- `MDCIconButtonToggle:change`

## Icon

A graphic icon.

See the [common icon readme](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#icon).

# More Information

See [Icon Button](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-icon-button) in MDC-Web for information about the upstream library's architecture.
