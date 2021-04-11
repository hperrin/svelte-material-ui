# Svelte Material UI - Switch

Switches are toggles. They're like checkboxes, but cooler.

# Installation

```sh
npm install --save-dev @smui/switch
```

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

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

# Demo

_in action:_ https://sveltematerialui.com/demo/switch

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/switch.svelte

# Exports

## (default)

A switch.

### Props / Defaults

- `use`: `[]` - An array of actions and/or action/property arrays.
- `class`: `''` - A CSS class string.
- `disabled`: `false` - Whether the input is disabled.
- `group`: `(uninitialised)` - The selected values of a group of switches as an array.
- `checked`: `(uninitialised)` - A boolean, whether the switch is checked. This is used instead of `group` for a single switch.
- `value` : `null` - The value of a switch in a group of switches.
- `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

- `input$` - Props forwarded to the input element.

### Events

All standard UI events are forwarded.

- `change`
- `input`

### Functions

- `getId` - Get the HTML ID of the element.

# More Information

See [Switches](https://material.io/components/switches) in the Material design spec.

See [Switch](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-switch) in MDC-Web for information about the upstream library's architecture.
