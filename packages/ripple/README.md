# Svelte Material UI - Ripple

Ripples are an interaction feedback mechanism.

See [MDC Ripple](https://material.io/develop/web/components/ripples/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-ripple/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/ripple
```

# Basic Usage

```html
<script>
  import Ripple from '@smui/ripple';

  let rippleClasses = [];
</script>

If you don't have a `class` attribute:

<p use:Ripple={{ripple: true, color: 'surface'}} tabindex="0">
  Here is an element with a ripple.
</p>

If you do have a `class` attribute:

<p
  class="some-class {rippleClasses.join(' ')}"
  use:Ripple={{
    ripple: true,
    color: 'surface',
    classForward: classes => rippleClasses = classes
  }}
  tabindex="0"
>
  Here is an element with a ripple.
</p>
```

# Demo

*in action:* https://sveltematerialui.com/demo/ripple

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/ripple.svelte

# Exports

## (default)

A ripple Svelte action.

### Props / Defaults

The action accepts an array, with two entries. The first is a boolean, whether the ripple is enabled. The second is an object with the props:

* `ripple` - Whether to enable the ripple.
* `unbounded` - Whether the ripple is unbounded.
* `disabled` - Whether the element is disabled.
* `color` - The ripple color. ('surface', 'primary', or 'secondary')
* `classForward` - A function that receives an array of classes. This is used to work around Svelte removing ripple classes in certain scenarios.