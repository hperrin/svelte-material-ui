# Svelte Material UI - Common Components

These common components are used in other components.

You can also use the elemental components to switch the HTML element that an SMUI component with a `component` prop uses.

# Installation

```sh
npm install --save-dev @smui/common
```

# Exports

## Label

A common label.

The common label is used everywhere that exports a `Label` component.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.

## Icon

A common icon.

The common icon is used everywhere that exports an `Icon` component except for `textfield` and `select`.

### Props / Defaults

- `component`: `I` - A component to use as the root element.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `on`: `false` - Used in the context of an icon button toggle to denote the icon for when the button is on.

# Other Components

These components are not exported in the index file, but are available to be imported directly. They are generally used for simple components which only add a class to an element.

## ClassAdder.svelte

A base component that adds a class to an element. The ClassAdder is used to provide simple components. It usually uses one of the elemental components listed below, but you can specify a different component for it to use. Every elemental component supports the `use` prop.

### Props / Defaults

- `component`: `(depends on context)` - The component to extend. Usually it is set to one of the elemental components below.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.

## ContextFragment.svelte

A fragment component (only contains a `<slot />`) used to define a Svelte context with a Svelte store.

### Props / Defaults

- `key`: `undefined` - The key of the Svelte context.
- `value`: `undefined` - The value of the store contained in the Svelte context. The store will be updated when the value changes.

# Elemental Components

These components are used in SMUI components that take a `component` prop. They determine which HTML element will be used as the root element of the component.

### Props / Defaults (Common to all Elemental Components)

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.

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

## Hr.svelte

An elemental component for the `hr` tag.

## I.svelte

An elemental component for the `i` tag.

## Img.svelte

An elemental component for the `img` tag.

## Li.svelte

An elemental component for the `li` tag.

## Main.svelte

An elemental component for the `main` tag.

## Nav.svelte

An elemental component for the `nav` tag.

## Section.svelte

An elemental component for the `section` tag.

## Span.svelte

An elemental component for the `span` tag.

## Svg.svelte

An elemental component for the `svg` tag.

## Ul.svelte

An elemental component for the `ul` tag.
