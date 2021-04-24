# Svelte Material UI - Checkbox

Checkbox is used to provide the same functionality as `<input type="checkbox">`.

# Installation

```sh
npm install --save-dev @smui/checkbox
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/checkbox)

[See the demo code.](/site/src/routes/demo/checkbox/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<FormField>
  <Checkbox bind:checked={selected} />
  <span slot="label">Check me.</span>
</FormField>

<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let selected = false;
</script>
```

# Exports

## (default)

A checkbox.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `disabled`: `false` - Whether the input is disabled.
- `touch`: `false` - The checkbox will have a larger touch target.
- `indeterminate`: `(uninitialised)` - Whether the state is indeterminate.
- `group`: `(uninitialised)` - The selected values of a group of checkboxes as an array.
- `checked`: `(uninitialised)` - A boolean, whether the checkbox is checked. This is used instead of `group` for a single checkbox.
- `value` : `null` - The value of a checkbox in a group of checkboxes.
- `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

- `input$` - Props forwarded to the input element.

### Functions

- `getId` - Get the HTML ID of the element.

# More Information

See [Checkboxes](https://material.io/components/checkboxes) in the Material design spec.

See [Checkbox](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-checkbox) in MDC-Web for information about the upstream library's architecture.
