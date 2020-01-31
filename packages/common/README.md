# Svelte Material UI - Common Components

The common components are used in other components. You can also use the elemental components to switch the element that a ClassAdder based component uses.

# Installation

```sh
npm install --save-dev @smui/common
```

# Exports

## Label

A common label.

The common label is used everywhere except for the `list` components.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.

### Events

All standard UI events are forwarded.

## Icon

A common icon.

The common icon is used everywhere except for the `textfield` and `select` components.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `on`: `false` - Used in the context of an icon button toggle to denote the icon for when the button is on.
* `leading`: `false` - Used in the context of a chip to denote that the icon is a leading icon.
* `leadingHidden`: `false` - Used in the context of a filter chip to hide the icon when the chip is selected.
* `trailing`: `false` - Used in the context of a chip to denote that the icon is a trailing icon.

### Events

All standard UI events are forwarded.

# Other Components

These components are not exported in the index file, but are available to be imported directly. They are generally used for simple components which only add a class to an element.

## ClassAdder.svelte

A base component that adds a class to an element. The ClassAdder is used to provide simple components. It usually uses one of the elemental components listed below, but you can specify a different component for it to use. Every elemental component supports the `use` prop.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `component`: `(depends on context)` - The component to extend. Usually it is set to one of the elemental components below.
* `forwardEvents`: `[]` - An array of additional events that should be forwarded.

## A.svelte

An elemental component for the `a` tag.

## Aside.svelte

An elemental component for the `aside` tag.

## Button.svelte

An elemental component for the `button` tag.

## Div.svelte

An elemental component for the `div` tag.

## Footer.svelte

An elemental component for the `footer` tag.

## H1.svelte

An elemental component for the `h1` tag.

## H2.svelte

An elemental component for the `h2` tag.

## H3.svelte

An elemental component for the `h3` tag.

## H4.svelte

An elemental component for the `h4` tag.

## H5.svelte

An elemental component for the `h5` tag.

## H6.svelte

An elemental component for the `h6` tag.

## Header.svelte

An elemental component for the `header` tag.

## Img.svelte

An elemental component for the `img` tag.

## Li.svelte

An elemental component for the `li` tag.

## Section.svelte

An elemental component for the `section` tag.

## Span.svelte

An elemental component for the `span` tag.

## Ul.svelte

An elemental component for the `ul` tag.
