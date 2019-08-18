# Svelte Material UI - Button

An interactive button or link.

See [MDC Buttons](https://material.io/develop/web/components/buttons/) for more information on API and Sass styling.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/master/packages/mdc-button/_variables.scss) for styling variables.

## Basic Usage

```html
<script>
  import Button, {Label} from 'svelte-material-ui/button';

  function doSomething() {
    alert('something');
  }
</script>

<Button on:click={doSomething}>
  <Label>Do Something</Label>
</Button>
```

## Demo

*in action:* https://hperrin.github.io/svelte-material-ui/demo/#/button

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/demo/component-demos/Button.svelte

## Exports

### (default): A button.

#### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
* `color`: `'primary'` - The button's color. ('primary' or 'secondary')
* `variant`: `'text'` - The button's style variant. ('text', 'raised', 'unelevated', or 'outlined')
* `dense`: `false` - Whether to style the button as dense.
* `href`: `null` - If the `href` property is set, the button will use an anchor element, instead of a button element.

#### Events

All standard UI events are forwarded.

### Group: A button group.

#### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `variant`: `'text'` - The button group's style variant. ('text', 'raised', 'unelevated', or 'outlined')

#### Events

All standard UI events are forwarded.

### GroupItem: A group item Svelte action.

Used for containing a button in a group. This can be useful for containing menus along with the button.

### Label: A text label.

See the common label readme.

### Icon: A graphic icon.

See the common icon readme.