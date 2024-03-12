# Installation

To get started, install the SMUI packages you need.

```sh
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# etc...
```

You can also [use SMUI in the Svelte REPL](/REPL.md).

## SvelteKit

For SvelteKit, check out the [SvelteKit instructions](/SVELTEKIT.md). Otherwise, read on.

## Importing Components

**Please note that these imports require a theme. See the default or custom theme below.**

You will always import Svelte components from the individual packages.

```svelte
<script>
  import Button from '@smui/button';
</script>
```

## Fonts

Material uses the Roboto fonts, so be sure to include these stylesheets (or include them from a package).

```html
<!-- Hint where we get fonts from. -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Roboto, and Roboto Mono fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet"
/>
```

## Icons

The easiest way to get Material icons is the font. If you'd like to use the Material Icons font, include that, also in the `head` section.

```html
<!-- Material Icons fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=Material+Icons&display=swap"
  rel="stylesheet"
/>
```

However, you can get a greatly expanded icon library and reduce over-the-wire sizes by using [the MDI library](https://pictogrammers.com/library/mdi/) instead.

```sh
npm install --save-dev @mdi/js
```

You can see how to use these icons on the "Using SVGs" demo on the [Icon Button demo page](https://sveltematerialui.com/demo/icon-button/).

## Installing a Theme

### A Custom Theme

Check out the [theming instructions](/THEMING.md) for setting up a custom theme.

### The Default Theme

You can use the prebuilt "bare.css" file from the "svelte-material-ui" package. If you use this option you _can_ mostly customize your theme, but your [theming options](/THEMING.md#theming-the-bare-css) are more limited.

```sh
npm install --save svelte-material-ui
```

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
```

If that's not working (probably because your dependencies aren't copied to your build folder), you can also use a CDN. Just be sure you update the version here when you update to a new version of SMUI. **This is already an outdated version, so update it now too.**

```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/bare.min.css"
/>
```

You can also use the "bare.css" files from the individual packages if you don't use many components and want smaller file sizes.

### A Premade Theme

There are some premade themes as well in the "svelte-material-ui" package, including dark mode versions. These are the same themes that appear on the [demo site](https://sveltematerialui.com/). You won't find the CSS in the repo, because they're not git tracked, but here's a list.

- `themes/svelte.css`
- `themes/svelte-dark.css`
- `themes/material.css`
- `themes/material-dark.css`
- `themes/fixation.css`
- `themes/fixation-dark.css`
- `themes/metro.css`
- `themes/metro-dark.css`
- `themes/unity.css`
- `themes/unity-dark.css`

```sh
npm install --save svelte-material-ui
```

```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="node_modules/svelte-material-ui/themes/svelte.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="node_modules/svelte-material-ui/themes/svelte-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

Or with a CDN. **Remember to update the version!**

```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/themes/svelte.min.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/themes/svelte-dark.min.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

## Making Your Tooling Svelte-Aware

A lot of tooling is already Svelte-aware, but if you are installing into a Rollup or Webpack project, you will need to configure its export conditions names to see Svelte libraries correctly.

### Rollup

You will need to add `'svelte'` to the [`exportConditions` config](https://github.com/rollup/plugins/tree/master/packages/node-resolve#exportconditions) of `nodeResolve`.

```js
// ...
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  // ...
  plugins: [
    // ...
    nodeResolve({
      // ...
      exportConditions: ['svelte'],
    }),
  ],
};
```

### Webpack

You will need to add `'svelte'` to the [`resolve.conditionNames` config](https://webpack.js.org/configuration/resolve/#resolveconditionnames).

```js
module.exports = {
  // ...
  resolve: {
    // ...
    conditionNames: ['svelte', 'require', 'node'],
  },
};
```
