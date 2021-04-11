# Svelte Material UI - Radio

Radios, or radio buttons, are input elements that give the user a choice between options.

# Installation

```sh
npm install --save-dev @smui/radio
```

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<FormField>
  <Radio bind:group={selected} value="a" />
  <span slot="label">A</span>
</FormField>
<FormField>
  <Radio bind:group={selected} value="b" />
  <span slot="label">B</span>
</FormField>
<FormField>
  <Radio bind:group={selected} value="c" />
  <span slot="label">C</span>
</FormField>

<script>
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let selected = 'a';
</script>
```

# Demo

_in action:_ https://sveltematerialui.com/demo/radio

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/radio.svelte

# Exports

## (default)

A radio.

### Props / Defaults

- `use`: `[]` - An array of actions and/or action/property arrays.
- `class`: `''` - A CSS class string.
- `disabled`: `false` - Whether the input is disabled.
- `touch`: `false` - The radio will have a larger touch target.
- `group`: `null` - The selected value of a group of radios.
- `value` : `null` - The value of a radio in a group of radios.
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

See [Radio buttons](https://material.io/components/radio-buttons) in the Material design spec.

See [Radio](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-radio) in MDC-Web for information about the upstream library's architecture.
