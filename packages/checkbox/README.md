# Svelte Material UI - Checkbox

Checkbox is used to provide the same functionality as `<input type="checkbox">`.

See [MDC Checkboxes](https://material.io/develop/web/components/input-controls/checkboxes/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-checkbox/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/checkbox
```

# Basic Usage

```html
<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let selected = false;
</script>

<FormField>
  <Checkbox bind:checked={selected} />
  <span slot="label">Check me.</span>
</FormField>
```

# Demo

*in action:* https://sveltematerialui.com/demo/checkbox

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/checkbox.svelte

# Exports

## (default)

A checkbox.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `disabled`: `false` - Whether the input is disabled.
* `indeterminate`: `(uninitialised)` - Whether the state is indeterminate.
* `group`: `(uninitialised)` - The selected values of a group of checkboxes as an array.
* `checked`: `(uninitialised)` - A boolean, whether the checkbox is checked. This is used instead of `group` for a single checkbox.
* `value` : `null` - The value of a checkbox in a group of checkboxes.
* `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

* `input$` - Props forwarded to the input element.

### Events

All standard UI events are forwarded.

* `change`
* `input`

### Functions

* `getId` - Get the HTML ID of the element.