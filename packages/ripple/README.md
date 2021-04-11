# Svelte Material UI - Ripple

Ripples are an interaction feedback mechanism.

# Installation

```sh
npm install --save-dev @smui/ripple
```

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
If you don't have a `class` attribute:

<p use:Ripple={{ ripple: true, color: 'surface' }} tabindex="0">
  Here is an element with a ripple.
</p>

If you do have a `class` attribute:

<p
  class="some-class {rippleClasses.join(' ')}"
  use:Ripple={{
    ripple: true,
    color: 'surface',
    classForward: (classes) => (rippleClasses = classes),
  }}
  tabindex="0"
>
  Here is an element with a ripple.
</p>

<script>
  import Ripple from '@smui/ripple';

  let rippleClasses = [];
</script>
```

# Demo

_in action:_ https://sveltematerialui.com/demo/ripple

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/ripple.svelte

# Exports

## (default)

A ripple Svelte action.

### Props / Defaults

The action accepts an array, with two entries. The first is a boolean, whether the ripple is enabled. The second is an object with the props:

- `ripple` - Whether to enable the ripple.
- `unbounded` - Whether the ripple is unbounded.
- `disabled` - Whether the element is disabled.
- `color` - The ripple color. ('surface', 'primary', or 'secondary')
- `classForward` - A function that receives an array of classes. This is used to work around Svelte removing ripple classes in certain scenarios.

# More Information

See [Ripple](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-ripple) in MDC-Web for information about the upstream library's architecture.
