# Svelte Material UI - Slider

Sliders are range selectors, providing the functionality of `<input type="range">`.

See [MDC Slider](https://material.io/develop/web/components/input-controls/sliders/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-slider/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/slider
```

# Basic Usage

```html
<script>
  import Slider from '@smui/slider'

  let value = 0;
</script>

<Slider bind:value />
```

# Demo

*in action:* https://sveltematerialui.com/demo/slider

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/slider.svelte

# Exports

todo...