# Svelte Material UI - Icon Button

Icon buttons are symbolic buttons or toggles.

# Installation

```sh
npm install --save-dev @smui/icon-button
```

# Examples and Usage Information

https://sveltematerialui.com/demo/icon-button

# Exports

## (default)

An icon button.

### Options / Defaults

- `component`: `href == null ? Button : A` - A component to use as the root element.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `color`: `undefined` - A color passed to the ripple action.
- `toggle`: `false` - Whether the button is a toggle. A toggle button should have two `Icon` children, one with the `on` prop.
- `pressed`: `false` - Whether the toggle button is pressed.
- `ariaLabelOn`: `undefined` - The ARIA label to use when the toggle is on.
- `ariaLabelOff`: `undefined` - The ARIA label to use when the toggle is off.
- `href`: `undefined` - If the `href` property is set, the button will use an anchor element, instead of a button element.
- `action`: `undefined` - Used in the context of a data table pagination or a dialog. This sets the button's action. ('first-page', 'prev-page', 'next-page', or 'last-page' for data table pagination, 'close' or any string for dialog)

### Events

- `MDCIconButtonToggle:change`

## Icon

A graphic icon.

See the [common icon readme](/packages/common/README.md#icon).

# More Information

See [Icon Button](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-icon-button) in MDC-Web for information about the upstream library's architecture.
