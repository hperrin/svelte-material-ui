# Svelte Material UI - Checkbox

Checkbox is used to provide the same functionality  `<input type="checkbox">`

Click [here](https://material.io/design/components/selection-controls.html#checkboxes) for more information on MDC check boxes.

## Basic Usage

```html
<script>
  import Checkbox from 'svelte-material-ui/components/checkbox';
  import FormField from 'svelte-material-ui/components/form-field';
  let simpleSelected = false;
</script>

<div>
  <div>
    <FormField>
      <Checkbox bind:checked={simpleSelected} />
      <span slot="label">Check me.</span>
    </FormField>
  </div>
</div>

```
## Demo

*in action:* https://hperrin.github.io/svelte-material-ui/demo/#/checkbox

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/demo/component-demos/Checkbox.svelte

## Exports

### (default): A Checkbox component.

#### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `disabled`: `false` - Component appears as disabled.
* `indeterminate`: `false` - Component is rendered in an indeterminate state
* `group`: `uninitialised` - The selected values of a group of check boxes as an array. NB: `uninitialised` is an empty function.
* `checked`: `true` || `false` - The rendered state of the component.
* `value` : `uninitialised` - The rendered state of a individual check box within a group of check boxes(?)

#### Events

All standard UI events are forwarded.