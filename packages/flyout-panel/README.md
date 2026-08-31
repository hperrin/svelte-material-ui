# Svelte Material UI - Flyout Panel

A small panel that flies in and out for actions like save.

# Installation

```sh
npm install --save-dev @smui/flyout-panel
```

# Examples and Usage Information

https://sveltematerialui.com/demo/flyout-panel

# Exports

## (default)

A flyout-panel.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `size`: `undefined` - A CSS value to use as the width for left/right panels and height for top/bottom panels. Injected directly into the CSS, so SANITIZE IT!
- `position`: `'bottom'` - The position of the flyout panel relative to the container. ('left', 'top', 'right', or 'bottom')
- `align`: `'middle'` - The alignment of the panel. ('start', 'middle', or 'end')
- `open`: `false` - Whether the panel is open.
- `sticky`: `false` - Whether the panel is sticky (position: sticky).
- `fixed`: `false` - Whether the panel is fixed to the viewport (position: fixed).

This component uses a Paper component, and accepts all of its props as well.
