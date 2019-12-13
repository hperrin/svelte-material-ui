# Svelte Material UI - Paper

An elevated and/or colored surface.

See [MDC Elevation](https://material.io/develop/web/components/elevation/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-elevation/_variables.scss) for styling variables.

See [the SMUI Sass variable file](https://github.com/hperrin/svelte-material-ui/blob/master/paper/_variables.scss) for additional styling variables.

# Installation

```sh
npm install --save-dev @smui/paper
```

# Basic Usage

```html
<script>
  import Paper, {Title, Subtitle, Content} from '@smui/paper';
</script>

<Paper>
  <Title>Paper</Title>
  <Subtitle>This is a sheet of paper.</Subtitle>
  <Content>Paper is used to build an elevated surface.</Content>
</Paper>
```

# Demo

*in action:* https://sveltematerialui.com/demo/paper

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/paper.svelte

# Exports

## (default)

A paper surface.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `square`: `false` - Whether the component has square or rounded corners.
* `color`: `'default'` - The component's color. ('primary', 'secondary' or 'default')
* `elevation`: `1` - The component's elevation. (integer between 0 and 24, inclusive)
* `transition`: `false` - Trigger a transition animation when elevation is changed.

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
