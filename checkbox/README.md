# Svelte Material UI - Checkbox

Checkbox is used to provide the same functionality as `<input type="checkbox">`.

See [MDC Checkboxes](https://material.io/develop/web/components/input-controls/checkboxes/) for more information on API and Sass styling.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/master/packages/mdc-checkbox/_variables.scss) for styling variables.

## Basic Usage

```html
<script>
  import Checkbox from 'svelte-material-ui/components/checkbox';
  import FormField from 'svelte-material-ui/components/form-field';
  let simpleSelected = false;
</script>

<FormField>
  <Checkbox bind:checked={simpleSelected} />
  <span slot="label">Check me.</span>
</FormField>
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
* `indeterminate`: `uninitialised` - Component is rendered in an indeterminate state
* `group`: `uninitialised` - The selected values of a group of check boxes as an array.
* `checked`: `uninitialised` - A boolean, whether the checkbox is checked. This is used instead of `group` for a single checkbox.
* `value` : `null` - The value of a checkbox in a group of checkboxes.
* `valueKey` : `uninitialised` - If `value` is not a string, this should be supplied as well, and should be a unique key.

#### Forwarded Props

* `input$` - Props forwarded to the input element.

#### Events

All standard UI events are forwarded.

* `change`
* `input`

#### Functions

* `getId` - Get the HTML ID of the element.