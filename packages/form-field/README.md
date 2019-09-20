# Svelte Material UI - Form Field

A wrapper to align an input and its label.

MDC Form Fields make the Input/Label RTL-aware and also activates a ripple effect.

See [MDC Form Fields](https://material.io/develop/web/components/input-controls/form-fields/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-form-field/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/form-field
```

# Basic Usage

```html
<script>
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let amIChecked = false;
</script>

<FormField>
  <Checkbox bind:checked={amIChecked} />
  <span slot="label">Am I Checked</span>
</FormField>
```

# Demo

*in action:* https://sveltematerialui.com/demo/radio

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/radio.svelte

# Exports

## (default)

A Form Field component.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `align`: `'start'` - Where to align the input. ('start' or 'end')
* `inputId`: `(programatically assigned)` - The ID of the input the label is to be associated with.

The ID is generated using a module context counter, so you don't need to provide one yourself. The format is `SMUI-form-field-{counter}`, and the counter starts at 0.

### Events

All standard UI events are forwarded.

### Forwarded Props

* `label$` - Props forwarded to the label element.
