# Installation

To get started, install the SMUI packages.

```sh
npm install --save @smui/button
npm install --save @smui/card
# etc...
```

You can also [use SMUI in the Svelte REPL](REPL.md).

## Importing Components

You will always import Svelte components from the individual packages.

This method will only include the JavaScript. Use this for the Default Theme or the [Easy Styling Method](SASS.md#easy-styling-method).

```svelte
<script>
  import Button from '@smui/button';
</script>
```

This method will include Sass files as well. Use this for the [Advanced Styling Method](SASS.md#advanced-styling-method).

```svelte
<script>
  import Button from '@smui/button/styled';
</script>
```

Notice that adding "/styled" to your import path means Sass files will be imported.

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

## Using the Default Theme

You can use the prebuilt "bare.css" file from the "svelte-material-ui" package. If you use this option you _can_ mostly customize your theme, but your [theming options](THEMING.md#theming-the-bare-css) are more limited.

```sh
npm install --save svelte-material-ui
```

```html
<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
```

If that's not working (probably because your dependencies aren't copied to your build folder), you can also use a CDN. Just be sure you update the version here when you update to a new version of SMUI.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@4.0.0/bare.min.css"
/>
```

You can also use the "bare.css" files from the individual packages if you don't use many components and want smaller file sizes.

## Using a Custom Theme

Check out the [Sass instructions](SASS.md) for setting up a custom theme.

## SvelteKit

For SvelteKit, check out the [SvelteKit instructions](SVELTEKIT.md).
