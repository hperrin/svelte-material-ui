# Svelte Material UI - Floating Label

Checkbox is used to provide the same functionality as `<input type="checkbox">`.

See [MDC Floating Label](https://material.io/develop/web/components/input-controls/floating-label/) for more information on API and Sass styling.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/master/packages/mdc-floating-label/_variables.scss) for styling variables.

## Basic Usage

```html
<script>
  import Textfield, {Input, Textarea} from 'svelte-material-ui/components/textfield';
  import FloatingLabel from 'svelte-material-ui/components/floating-label';
  let sameValue = '';
</script>

<Textfield>
  <Input bind:value={someValue} id="input-manual-a" />
  <FloatingLabel for="input-manual-a">Label</FloatingLabel>
</Textfield>
```
## Demo

*in action:* https://hperrin.github.io/svelte-material-ui/demo/#/checkbox

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/demo/component-demos/Checkbox.svelte

## Exports

### (default): A Floating Label component.

#### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `for`: `{programatically assigned}` - The Id of the FormField the label is to be associated with.
* `wrapped`: `false` - Wraps the label

#### Events

All standard UI events are forwarded.

#### Functions

* `getWidth()` - Get the width of the label element.
* `float(boolean)` - Floats the label element.
* `shake(boolean)` - Shakes the label element.