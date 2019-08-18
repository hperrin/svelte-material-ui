# Svelte Material UI - Form Field

FormField is used as a wrapper to align a Web form fields (ie: a checkbox, text input etc) and their label.

MDC Form Fields make the Input/Label RTL-aware and also activates a ripple effect.

See [MDC Form Fields](https://material.io/develop/web/components/input-controls/form-fields/) for more information on API and Sass styling.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/_variables.scss) for styling variables.

## Basic Usage

```html
<script>
  import FormField from 'svelte-material-ui/components/form-field';
  import Slider from 'svelte-material-ui/components/slider';
  
  let sliderValue = 0;
</script>

<FormField align="end" style="display: flex;">
  <Slider bind:value={sliderValue} min={0} max={24} discrete />
  <span slot="label" >Slider Value</span>
</FormField>
```
## Exports

### (default): A FormField component.

#### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `align`: `start` - Used aligh label text and input.
* `inputId`: `{programatically assigned}` - The Id of the FormField the label is to be associated with.

#### Events

All standard UI events are forwarded.

#### Forwarded Props

* `label$` - Props forwarded to the label element.