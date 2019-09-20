# Svelte Material UI - Radio

Radios, or radio buttons, are input elements that give the user a choice between options.

See [MDC Radio](https://material.io/develop/web/components/input-controls/radio-buttons/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-radio/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/radio
```

# Basic Usage

```html
<script>
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let selected = 'a';
</script>

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
```

# Demo

*in action:* https://sveltematerialui.com/demo/radio

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/radio.svelte

# Exports

## (default)

A radio.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `disabled`: `false` - Whether the input is disabled.
* `group`: `null` - The selected value of a group of radios.
* `value` : `null` - The value of a radio in a group of radios.
* `valueKey` : `(uninitialised)` - If `value` is not a string, this should be supplied as well, and should be a unique key.

### Forwarded Props

* `input$` - Props forwarded to the input element.

### Events

All standard UI events are forwarded.

* `change`
* `input`

### Functions

* `getId` - Get the HTML ID of the element.