# Svelte Material UI - Button

An interactive button or link.

See [MDC Buttons](https://material.io/develop/web/components/buttons/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-button/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/button
```

# Basic Usage

```html
<script>
  import Button, {Label} from '@smui/button';

  function doSomething() {
    alert('something');
  }
</script>

<Button on:click={doSomething}>
  <Label>Do Something</Label>
</Button>
```

# Demo

*in action:* https://sveltematerialui.com/demo/button

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/button.svelte

# Exports

## (default)

A button.

### Options / Defaults

* `component`: `href == null ? Button : A` - A component to use as the root element.
* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
* `color`: `'primary'` - The button's color. ('primary' or 'secondary')
* `variant`: `'text'` - The button's style variant. ('text', 'raised', 'unelevated', or 'outlined')
* `dense`: `false` - Whether to style the button as dense.
* `href`: `null` - If the `href` property is set, the button will use an anchor element, instead of a button element.
* `action`: `'close'` - Used in the context of a dialog. This sets the button's action.
* `default`: `false` - Used in the context of a dialog. This makes the button the default for the dialog.

### Events

All standard UI events are forwarded.

## Group

A button group.

### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `variant`: `'text'` - The button group's style variant. ('text', 'raised', 'unelevated', or 'outlined')

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