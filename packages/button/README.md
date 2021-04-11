# Svelte Material UI - Button

An interactive button or link.

# Installation

```sh
npm install --save-dev @smui/button
```

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Button on:click={doSomething}>
  <Label>Do Something</Label>
</Button>

<script>
  import Button, { Label } from '@smui/button';

  function doSomething() {
    alert('something');
  }
</script>
```

# Demo

_in action:_ https://sveltematerialui.com/demo/button

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/button.svelte

# Exports

## (default)

A button.

### Options / Defaults

- `component`: `href == null ? Button : A` - A component to use as the root element.
- `use`: `[]` - An array of actions and/or action/property arrays.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `color`: `'primary'` - The button's color. ('primary' or 'secondary')
- `variant`: `'text'` - The button's style variant. ('text', 'raised', 'unelevated', or 'outlined')
- `touch`: `false` - The button will have a larger touch target.
- `href`: `null` - If the `href` property is set, the button will use an anchor element, instead of a button element.
- `action`: `'close'` - Used in the context of a dialog. This sets the button's action.
- `default`: `false` - Used in the context of a dialog. This makes the button the default for the dialog.

### Events

All standard UI events are forwarded.

## Group

A button group.

### Options / Defaults

- `use`: `[]` - An array of actions and/or action/property arrays.
- `class`: `''` - A CSS class string.
- `variant`: `'text'` - The button group's style variant. ('text', 'raised', 'unelevated', or 'outlined')

### Events

All standard UI events are forwarded.

## GroupItem

A group item Svelte action. Used for containing a button in a group. This can be useful for containing menus along with the button.

## Label

A text label.

See the [common label readme](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#label).

## Icon

A graphic icon.

See the [common icon readme](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#icon).

# More Information

See [Buttons](https://material.io/components/buttons) in the Material design spec.

See [Button](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-button) in MDC-Web for information about the upstream library's architecture.
