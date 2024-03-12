# Theming SMUI

## Theming with Sass

If you're going to theme with Sass, reading an [introduction to Sass](https://sass-lang.com/guide) would be helpful. Hoever, you don't need to know much about Sass to make basic themes for SMUI.

To create a custom Sass theme, install the SMUI Theme Builder.

```sh
npm install --save-dev smui-theme
```

You can use it to create your theme directory from a template. Adjust to your source directory if needed.

```sh
npx smui-theme template src/theme
```

This creates a `_smui-theme.scss` file in `src/theme` for light mode and an alternative `_smui-theme.scss` file in `src/theme/dark` for dark mode. That is where you set the theme variables.

### Building Your Theme

In your package.json file, add this script in the "scripts" section, adjusting the source/destination files as needed.

```
"prepare": "npm run smui-theme-light && npm run smui-theme-dark",
"smui-theme-light": "smui-theme compile build/smui.css -i src/theme",
"smui-theme-dark": "smui-theme compile build/smui-dark.css -i src/theme/dark",
```

Or if you don't need dark mode support.

```
"prepare": "smui-theme compile build/smui.css -i src/theme",
```

Now run `npm run prepare` to build the CSS file(s), then add them on your page. Something like this, adjusting the paths as needed.

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
<link
  rel="stylesheet"
  href="/smui-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

Or if you don't need dark mode support.

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" />
```

**Important: The smui-theme compiler will only include the Sass for the packages installed when it is run. If you install a new SMUI package, you should run `npm run prepare` to rebuild the CSS.**

### Theme Variables

The most important part of theming (and probably the only one you want) is setting the [theme colors](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-theme#color-scheme). For the Material color palette, you can @use ["@material/theme/color-palette"](https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-theme/_color-palette.scss). You might also want to style the [border radius variables](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-shape#sass-variables).

To learn how to deeply style the individual components, you can check out the READMEs of [the MDC-Web components](https://github.com/material-components/material-components-web/tree/v14.0.0/packages). If you need more help, check out the [theming guide](https://m2.material.io/develop/web/theming/theming-guide) on the MDC-Web website. SMUI uses all the styles from MDC-Web, so everything regarding Sass and CSS from that guide should work with SMUI.

Here is an example `_smui-theme.scss` file you can use as a starting point.

```scss
@use '@material/theme/color-palette';

$background: #fff;

@use '@material/theme/index' as theme with (
  $primary: color-palette.$purple-500,
  $secondary: color-palette.$teal-600,
  $surface: #fff,
  $background: $background,
  $error: #b00020
);

html,
body {
  background-color: $background;
  color: if(theme.contrast-tone($background) == 'dark', #000, #fff);
}

a {
  color: color-palette.$blue-500;
}
a:visited {
  color: color-palette.$blue-800;
}
```

### Customizing Further

If you'd like to customize the styles even further, you can set additional variables in other MDC or SMUI components. Some notable ones are the [shape variables](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-shape#sass-variables) and the [typography variables](https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-typography/_typography.scss#L93). You can add them to your `_smui-theme.scss` file. For example, you can remove rounded corners in SMUI by setting the shape variables.

```scss
@use '@material/shape/index' as shape with (
  $small-component-radius: 0,
  $medium-component-radius: 0,
  $large-component-radius: 0
);
```

Just make sure that you put that directly after the `@use '@material/theme/index'` block. All `@use` statements in a file must precede any styles in Sass. Also, remember to include it in both your light and dark theme files if you're using both.

### Adding Classes and Variables

If you want to use MDC's classes and variables (like `var(--mdc-theme-primary)` and `class="mdc-theme--primary-bg"`), you can add the following line somewhere in your Sass files. A great place to add it is in your `_smui-theme.scss` files.

```scss
@use '@material/theme/styles';
```

## Adding Material Typography

You can [add Material typography](/TYPOGRAPHY.md) as the default for your app.

## Theming the Bare CSS

If you use the bare CSS (or a premade theme), you can set a subset of the theme options with CSS variables. Note that not all of the colors in SMUI read from CSS variables, so some parts will still use the colors defined in the original Sass compile. Below is a copy of the variables from the CSS on the SMUI website. You can use this as a starting point for your own theme.

```css
/* Theme colors. */
:root {
  --mdc-theme-primary: #ff3e00;
  --mdc-theme-secondary: #676778;
  --mdc-theme-background: #fff;
  --mdc-theme-surface: #fff;
  --mdc-theme-error: #b71c1c;
  --mdc-theme-on-primary: #fff;
  --mdc-theme-on-secondary: #fff;
  --mdc-theme-on-surface: #000;
  --mdc-theme-on-error: #fff;
  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-dark: white;
  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
  --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
}

/* Layout grid spacing. */
:root {
  --mdc-layout-grid-margin-desktop: 24px;
  --mdc-layout-grid-gutter-desktop: 24px;
  --mdc-layout-grid-column-width-desktop: 72px;
  --mdc-layout-grid-margin-tablet: 16px;
  --mdc-layout-grid-gutter-tablet: 16px;
  --mdc-layout-grid-column-width-tablet: 72px;
  --mdc-layout-grid-margin-phone: 16px;
  --mdc-layout-grid-gutter-phone: 16px;
  --mdc-layout-grid-column-width-phone: 72px;
}
```
