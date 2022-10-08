# Svelte Material UI - Cards

A container for media and actions.

# Installation

```sh
npm install --save-dev @smui/card
```

# Examples and Usage Information

https://sveltematerialui.com/demo/card

# Exports

## (default)

A card.

### Options / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `variant`: `'raised'` - The card's style variant. ('raised' or 'outlined')
- `padded`: `false` - Whether to apply padding to the card. You can also use a `Content` component to achieve the same effect.

## Content

A fragment used as a content area within a card.

Equivalent to the [`ClassAdder` with `Div` common component](/packages/common/README.md#classaddersvelte).

Note that you can supply your own component to a `ClassAdder` based component. You can use this to create things like list cards.

## PrimaryAction

An interactive portion of the card. Meant to be the primary way to interact with the card.

### Options / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `color`: `undefined` - A color, passed to the Ripple action. ('primary', or 'secondary')
- `padded`: `false` - Whether to apply padding to the area.
- `tabindex`: `0` - The tabindex of the area.

## Media

An area of the card meant to show media content.

### Options / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `aspectRatio`: `undefined` - Add styling to maintain a given aspect ratio. ('square' or '16x9')

## MediaContent

An area of the card within the media meant to show content over top of the media.

Equivalent to the [`ClassAdder` with `Div` common component](/packages/common/README.md#classaddersvelte).

## Actions

An area of the card containing interactive actions.

### Options / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `fullBleed`: `false` - Whether to style the actions as full bleed, meaning they take up the whole width of the card.

## ActionButtons

An area of the card, within Actions, containing buttons.

Equivalent to the [`ClassAdder` with `Div` common component](/packages/common/README.md#classaddersvelte).

## ActionIcons

An area of the card, within Actions, containing icon buttons.

Equivalent to the [`ClassAdder` with `Div` common component](/packages/common/README.md#classaddersvelte).

# More Information

See [Cards](https://material.io/components/cards) in the Material design spec.

See [Card](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-card) in MDC-Web for information about the upstream library's architecture.
