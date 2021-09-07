# Svelte Material UI - Button

An interactive button or link.

# Installation

```sh
npm install --save-dev @smui/button
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/button)

[See the demo code.](/site/src/routes/demo/button/)

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

# Exports

## (default)

A button.

### Options / Defaults

- `component`: `href == null ? Button : A` - A component to use as the root element.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `color`: `'primary'` - The button's color. ('primary' or 'secondary')
- `variant`: `'text'` - The button's style variant. ('text', 'raised', 'unelevated', or 'outlined')
- `touch`: `false` - The button will have a larger touch target.
- `href`: `null` - If the `href` property is set, the button will use an anchor element, instead of a button element.
- `action`: `'close'` - Used in the context of a dialog. This sets the button's action.
- `default`: `false` - Used in the context of a dialog. This makes the button the default for the dialog.
- `secondary`: `false` - Used in the context of a banner. This makes the button the secondary action for the banner.

## Group

A button group.

### Options / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `variant`: `'text'` - The button group's style variant. ('text', 'raised', 'unelevated', or 'outlined')

## GroupItem

A Svelte action for a group item. Used for containing a button in a group. This can be useful for containing menus along with the button. If you are using this on an element that you are also defining classes on (or a component that defines classes internally), you need to provide `addClass` and `removeClass` functions.

### Options / Defaults

- `addClass`: `(className) => node.classList.add(className)` - A function to add a class to the element.
- `removeClass`: `(className) => node.classList.remove(className)` - A function to remove a class to the element.

## Label

A text label.

See the [common label readme](/packages/common/README.md#label).

## Icon

A graphic icon.

See the [common icon readme](/packages/common/README.md#icon).

# More Information

See [Buttons](https://material.io/components/buttons) in the Material design spec.

See [Button](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-button) in MDC-Web for information about the upstream library's architecture.
