# Svelte Material UI - Slider

Sliders are range selectors, providing the functionality of `<input type="range">`.

# Installation

```sh
npm install --save-dev @smui/slider
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/slider)

[See the demo code.](/site/src/routes/demo/slider/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Slider bind:value />

<script>
  import Slider from '@smui/slider';

  let value = 0;
</script>
```

# Exports

todo...

# More Information

See [Sliders](https://material.io/components/sliders) in the Material design spec.

See [Slider](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-slider) in MDC-Web for information about the upstream library's architecture.
