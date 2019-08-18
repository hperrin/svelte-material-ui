# Svelte Material UI - Paper

Paper is used to build an elevated surface.

See [MDC Elevation](https://material.io/develop/web/components/elevation/) for more information on API and Sass styling.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_variables.scss) for styling variables.

See [the SMUI specific Sass variable file](https://github.com/hperrin/svelte-material-ui/blob/master/paper/_variables.scss) for additional styling variables.

## Basic Usage

```html
<script>
  import Paper, {Title, Subtitle, Content} from 'svelte-material-ui/paper';
</script>

<Paper>
  <Title>Paper</Title>
  <Subtitle>This is a sheet of paper.</Subtitle>
  <Content>Paper is used to build an elevated surface.</Content>
</Paper>
```

## Demo

*in action:* https://hperrin.github.io/svelte-material-ui/demo/#/paper

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/demo/component-demos/Paper.svelte

## Exports

### (default): A Paper component.

#### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `square`: `false` - The square property determines of the component has square (`true`) or rounded (`false`) corners.
* `color`: `'default'` - The component's color. ('primary', 'secondary' or 'default')
* `elevation`: `1` - The component's elevation.
* `transition`: `false` - Trigger a transition animation when component changes elevation.

#### Events

All standard UI events are forwarded.

### Title: A fragment used as a title on the Paper.

An area denoting the title of the Paper, equivalent to the `H5` common component.

### Subtitle: A fragment used as a subtitle on the Paper.

An area denoting the subtitle of the Paper, equivalent to the `H6` common component.

### Content: A fragment used as a body of the Paper.

An area denoting the content/body of the Paper, equivalent to the `Div` common component.
