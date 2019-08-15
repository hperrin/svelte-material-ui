# Svelte Material UI - Button

Paper is used to build an elevated surface.

Click [here](https://material.io/develop/web/components/elevation/) for more information on MDC elevation.

## Basic Usage

```html
<script>
  import Paper {Title, Subtitle, Content} from 'svelte-material-ui/components/paper'
</script>

<div>
  <Paper class="paper">
    <Title>Paper</Title>
    <Subtitle>This is a sheet of paper.</Subtitle>
    <Content>Paper is used to build an elevated surface.</Content>
  </Paper>
</div>

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

#### Subcomponents

##### Title: A fragment used as a title on the Paper.

An area denoting the title of the Paper, equivalent to the `H5` common component.

##### Subtitle: A fragment used as a subtitle on the Paper.

An area denoting the subtitle of the Paper, equivalent to the `H6` common component.

##### Content: A fragment used as a body of the Paper.

An area denoting the content/body of the Paper, equivalent to the `Div` common component.
