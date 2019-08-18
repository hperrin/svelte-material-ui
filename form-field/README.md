# Svelte Material UI - Form Field

FormField is used as a wrapper to align an input and its label.

MDC Form Fields make the Input/Label RTL-aware and also activates a ripple effect.

See [MDC Form Fields](https://material.io/develop/web/components/input-controls/form-fields/) for more information on API and Sass styling.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/_variables.scss) for styling variables.

## Basic Usage

```html
<script>
  import FormField from 'svelte-material-ui/form-field';
  import Checkbox from 'svelte-material-ui/checkbox';

  let amIChecked = false;
</script>

<FormField>
  <Checkbox bind:checked={amIChecked} />
  <span slot="label">Am I Checked</span>
</FormField>
```
## Exports

### (default): A Form Field component.

#### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `align`: `start` - Where to align the input. ("start" or "end")
* `inputId`: `{programatically assigned}` - The Id of the FormField the label is to be associated with.

#### Events

All standard UI events are forwarded.

#### Forwarded Props

* `label$` - Props forwarded to the label element.