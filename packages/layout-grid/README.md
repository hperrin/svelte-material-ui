# Svelte Material UI - Layout Grid

A responsive grid layout component. It has 12 columns on large screens (desktop), 8 columns on medium screens (tablet), and 4 columns on small screens (phone).

# Installation

```sh
npm install --save-dev @smui/layout-grid
```

# Demo

_in action:_ https://sveltematerialui.com/demo/layout-grid

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/layout-grid/

# Basic Usage

```svelte
<LayoutGrid>
  <Cell span={3}>I'm the first cell!</Cell>
  <Cell span={3}>I'm the second cell.</Cell>
  <Cell span={3}>Im the third cell</Cell>
  <Cell span={3}>im the 4th cell</Cell>
</LayoutGrid>

<script>
  import LayoutGrid, { Cell } from '@smui/layout-grid';
</script>
```

# Exports

## (default)

A layout grid container. It contains an inner grid.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `fixedColumnWidth`: `false` - Give the grid fixed column width.
- `align`: `null` - Specifies the alignment of the entire grid. ('left' or 'right')

### Events

All standard UI events are forwarded.

## Cell

A layout grid cell.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `align`: `null` - Specifies the alignment of the entire grid. ('top', 'middle', or 'bottom')
- `order`: `null` - Specify the display order of the cell. Normally cells are displayed in source order. This may affect accessibility, since screen readers usually follow source order. (integer between 1 and 12)
- `span`: `null` - Makes the cell span the given number of columns. If the number of columns on the viewing device is fewer than this, the cell will span the available number of columns. Cells default to spanning four columns. (integer between 1 and 12)
- `spanDevices`: `{}` - A map of device types to cell span sizes. These will override the `span` prop on the given device. ({ desktop?: integer; tablet?: integer; phone?: integer; })

### Forwarded Props

- `innerGrid$` - Props forwarded to the inner grid.

### Events

All standard UI events are forwarded.

## InnerGrid

An inner layout grid used for nesting. It is meant to be put directly under a cell to create a new nested grid layout.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.

### Events

All standard UI events are forwarded.

# More Information

See [Responsive layout grid](https://material.io/design/layout/responsive-layout-grid.html) in the Material design spec.

See [Layout Grid](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-layout-grid) in MDC-Web for information about the upstream library's architecture.
