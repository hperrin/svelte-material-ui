# Svelte Material UI - Form Field

A wrapper to align an input and its label.

MDC Form Fields make the Input/Label RTL-aware and also activates a ripple effect.

# Installation

```sh
npm install --save-dev @smui/form-field
```

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<FormField>
  <Checkbox bind:checked={amIChecked} />
  <span slot="label">Am I Checked</span>
</FormField>

<script>
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let amIChecked = false;
</script>
```

# Demo

_in action:_ https://sveltematerialui.com/demo/radio

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/radio.svelte

# Exports

## (default)

A Form Field component.

### Props / Defaults

- `use`: `[]` - An array of actions and/or action/property arrays.
- `class`: `''` - A CSS class string.
- `align`: `'start'` - Where to align the input. ('start' or 'end')
- `inputId`: `(programatically assigned)` - The ID of the input the label is to be associated with.

The ID is generated using a module context counter, so you don't need to provide one yourself. The format is `SMUI-form-field-{counter}`, and the counter starts at 0.

### Events

All standard UI events are forwarded.

### Forwarded Props

- `label$` - Props forwarded to the label element.

# More Information

See [Form Field](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-form-field) in MDC-Web for information about the upstream library's architecture.
