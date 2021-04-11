# Svelte Material UI - Paper

An elevated and/or colored surface.

# Installation

```sh
npm install --save-dev @smui/paper
```

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Paper>
  <Title>Paper</Title>
  <Subtitle>This is a sheet of paper.</Subtitle>
  <Content>Paper is used to build an elevated surface.</Content>
</Paper>

<script>
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
</script>
```

# Demo

_in action:_ https://sveltematerialui.com/demo/paper

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/paper/

# Exports

## (default)

A paper surface.

### Props / Defaults

- `use`: `[]` - An array of actions and/or action/property arrays.
- `class`: `''` - A CSS class string.
- `square`: `false` - Whether the component has square or rounded corners.
- `color`: `'default'` - The component's color. ('primary', 'secondary' or 'default')
- `elevation`: `1` - The component's elevation. (integer between 0 and 24, inclusive)
- `transition`: `false` - Trigger a transition animation when elevation is changed.

### Events

All standard UI events are forwarded.

## Title

A fragment used as a title on the Paper.

Equivalent to the [`ClassAdder` with `H5` common component](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#classaddersvelte).

## Subtitle

A fragment used as a subtitle on the Paper.

Equivalent to the [`ClassAdder` with `H6` common component](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#classaddersvelte).

## Content

A fragment used as a body of the Paper.

Equivalent to the [`ClassAdder` with `Div` common component](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#classaddersvelte).

# More Information

See [Elevation](https://material.io/design/environment/elevation.html) in the Material design spec.

See [Elevation](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-elevation) in MDC-Web for information about the upstream library's architecture.
