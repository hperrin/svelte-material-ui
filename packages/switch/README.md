# Svelte Material UI - Switch

Switches are toggles. They're like checkboxes, but cooler.

See [MDC Switch](https://material.io/develop/web/components/input-controls/switches/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-switch/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @svelte-material-ui/switch
```

# Basic Usage

```html
<script>
  import Switch from '@svelte-material-ui/switch';
  import FormField from '@svelte-material-ui/form-field';

  let selected = false;
</script>

<FormField>
  <Switch bind:checked={selected} />
  <span slot="label">Switch me.</span>
</FormField>
```

# Demo

*in action:* https://hperrin.github.io/svelte-material-ui-demo/#/switch

*demo code:* https://github.com/hperrin/svelte-material-ui-demo/blob/master/component-demos/Switch.svelte

# Exports

## (default)

A switch.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `disabled`: `false` - Whether the input is disabled.
* `group`: `(uninitialised)` - The selected values of a group of switches as an array.
* `checked`: `(uninitialised)` - A boolean, whether the switch is checked. This is used instead of `group` for a single switch.
* `value` : `null` - The value of a switch in a group of switches.
* `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

* `input$` - Props forwarded to the input element.

### Events

All standard UI events are forwarded.

* `change`
* `input`

### Functions

* `getId` - Get the HTML ID of the element.