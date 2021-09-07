# Svelte Material UI - Switch

Switches are toggles. They're like checkboxes, but cooler.

# Installation

```sh
npm install --save-dev @smui/switch
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/switch)

[See the demo code.](/site/src/routes/demo/switch/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<FormField>
  <Switch bind:checked={selected} />
  <span slot="label">Switch me.</span>
</FormField>

<script>
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';

  let selected = false;
</script>
```

# Exports

## (default)

A switch.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `disabled`: `false` - Whether the input is disabled.
- `group`: `(uninitialised)` - The selected values of a group of switches as an array.
- `checked`: `(uninitialised)` - A boolean, whether the switch is checked. This is used instead of `group` for a single switch.
- `value` : `null` - The value of a switch in a group of switches.
- `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

- `input$` - Props forwarded to the input element.

### Functions

- `getId` - Get the HTML ID of the element.

# More Information

See [Switches](https://material.io/components/switches) in the Material design spec.

See [Switch](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-switch) in MDC-Web for information about the upstream library's architecture.
