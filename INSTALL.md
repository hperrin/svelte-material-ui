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

## Material Fonts

If you want the Material Icon, Roboto, and Roboto Mono fonts, be sure to include these stylesheets (or include them from a package).

```html
<!-- Material Icons -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>
```

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

If that's not working (probably because your dependencies aren't copied to your build folder), you can also use a CDN. Just be sure you update the version here when you update to a new version of SMUI. (This may already be an outdated version, so update it now too.)

```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css"
/>
```

You can also use the "bare.css" files from the individual packages if you don't use many components and want smaller file sizes.

### A Premade Theme

There are some premade themes as well in the "svelte-material-ui" package, including dark mode versions. These are the same themes that appear on the demo site. You won't find the CSS in the repo, because they're not git tracked, but here's a list.

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

Or with a CDN. Remember to update the version!

```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/themes/svelte.min.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/themes/svelte-dark.min.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```
